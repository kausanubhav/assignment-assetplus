import { useNavigate } from "react-router-dom"



function Post({post}) {
  console.log(post)
    const {title,description,imageUrl}=post
    const navigate=useNavigate()
    const handleClick=()=>{
      navigate('/')
    }

  return (
    <>
     <div className="flex flex-row bg-white rounded-lg shadow-lg overflow-hidden" onClick={handleClick}>
       {/* <div className="w-1/2">
         <img src={imageUrl} alt="Card" className="object-cover h-full w-full" />
       </div> */}
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
    </>
  );
}
export default Post