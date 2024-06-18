import { post } from "@/types"



const data:post = {
  title:"Este es un nuevo post",
  description: "Es un post de prueba, nada importante",
  image:"no",
  video:"no",
}
const newPost = () => {
  fetch("http://localhost:3000/api/posts", {
    method:"POST",
    body:JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => console.log("data:", data))
  .catch(error => console.log(error))
}
// useEffect(()=>{
//   newPost()
// // eslint-disable-next-line react-hooks/exhaustive-deps
// },[])

const getOnePost = () => {
  fetch("http://localhost:3000/api/posts/5")
  .then(res => res.json())
  .then(data => console.log("data:", data))
  .catch(error => console.log("ERROR DE FETCH: ",error))
}

const getAllPosts = () => {
  fetch("http://localhost:3000/api/posts/")
  .then(res => res.json())
  .then(data => console.log("data:", data))
  .catch(error => console.log("ERROR DE FETCH: ",error))
}


const updateData:post = {
  title:"Actividad",
  description: "Es un post de prueba,  actualizado con PUT",
  image:"no",
  video:"no",
}
const updatePost = () => {
  fetch("http://localhost:3000/api/posts/2",
    {
      method: "PUT",
      body:JSON.stringify(updateData)
    }
  )
  .then(res => res.json())
  .then(data => console.log("data:", data))
  .catch(error => console.log("ERROR DE FETCH: ",error))
}

const deletePost = () => {
  fetch("http://localhost:3000/api/posts/13",
    {
      method: "DELETE",
    }
  )
  .then(res => res.json())
  .then(data => console.log("data:", data))
  .catch(error => console.log("ERROR DE FETCH: ",error))
}

async function getOneUser (email:string) {
  console.log("email en FETCH: ", email)
  try {
    const res = await fetch(`http://localhost:3000/api/userAuth/${email}`)
    const data = res.json()
    return data
  }
  catch (error) {
   console.log("ERROR DE FETCH: ",error)
  }
}

export {deletePost, updatePost, getAllPosts, getOnePost, newPost, getOneUser}
