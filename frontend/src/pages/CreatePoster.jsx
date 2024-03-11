import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreatePoster() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const navigate = useNavigate()
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0]
    setImage(selectedImage)

    // Optionally, you can show a preview of the selected image
    // For simplicity, let's assume you have an <img> element with the id "image-preview"
    const previewElement = document.getElementById("image-preview")
    if (previewElement) {
      previewElement.src = URL.createObjectURL(selectedImage)
    }
  }
  const handleSubmit = async () => {
    console.log('save clicked')
    if (!title || !description || !image) return
    try {
      const res = await axios.post("/api/posts/create", { title, description })

      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <header className="border-b my-4 max-w-6xl mx-auto p-3">
        <div className="flex items-center justify-between ">
          <h1 className="text-3xl font-semibold text-gray-600">Add New Post</h1>
          <button
            className="px-8 py-2 bg-green-500 text-white font-semibold text-md sm:text-lg"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </header>
      <form className="max-w-5xl mx-auto p-3 flex flex-col md:flex-row gap-8">
        <div>
          <div className="flex flex-col gap-3 mb-8">
            <span className="text-2xl font-semibold">Title</span>
            <input
              className="p-3 rounded-md"
              type="text"
              placeholder="Add title"
              id="title"
              onChange={handleTitleChange}
            />
          </div>

          <div className="flex flex-col gap-3 mb-8">
            <span className="text-2xl font-semibold">Description</span>
            <textarea
              id="description"
              className="p-3 rounded-md"
              onChange={handleDescriptionChange}
              cols="30"
              rows="10"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span>Poster</span>
          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
          <img
            id="image-preview"
            src=""
            alt="Image Preview"
            className="object-cover h-24 w-24"
          />{" "}
        </div>
      </form>
    </>
  )
}
