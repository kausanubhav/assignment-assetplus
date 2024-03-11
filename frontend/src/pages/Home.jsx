import axios from "axios"
import { useEffect, useState } from "react"
import { MdAdd } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import Post from "../components/Post"

export default function Home() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [searchInput, setsearchInput] = useState("")
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/api/posts/get?searchTerm=${searchInput}`)
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchPosts()
  }, [])
  useEffect(() => {
    const newArray = posts?.filter(
      (post) => post.title.toLowerCase().includes(searchInput) || post.description.includes(searchInput)
    )
    console.log(newArray)
  }, [searchInput])

  return (
    <main>
      <header className="border-b my-4 p-3">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate("/create-poster")}>
            <MdAdd className="text-3xl sm:text-4xl " />
          </button>
          <h1 className="text-4xl font-semibold text-gray-600">Content Gallery</h1>
          <form>
            <input
              onChange={(e) => setsearchInput(e.target.value)}
              value={searchInput}
              type="text"
              id="searchInput"
              className="p-2 border rounded-lg"
              placeholder="Search"
            />
          </form>
        </div>
      </header>

      <div>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Page Title</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts?.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
