"use client"
import {post, postStateType} from "../../types"
import { FormEvent, SyntheticEvent, useEffect, useState } from "react";
import { deletePost, getAllPosts, getOnePost, getOneUser, newPost, updatePost } from "../../utils/fetchFunctions";
import { AuthProvider } from "@/components/authProvider";
import { NavBarAuth } from "@/components/NavBarAuth";
import "../globals.css";
import "./cp.css"
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import { ChangeEvent } from "react";
import { ImgUploader } from "@/components/ImgUploader";
import { imageChecker } from "@/utils/imgChecker";
import Image from "next/image";
import Input from "@/components/Input";

export default function ControlPanel() {
  const initialPostState: postStateType = {
    title:"",
    subTitle1: "",
    requirements1:[],
    subTitle2: "",
    requirements2:[]
  }
  type keys = "title" | "subTitle1" | "requirements1" | "subTitle2" | "requirements2"

  const [image, setImage] = useState<Blob | undefined>()
  const [newItemSection1, setNewItemSection1] = useState("")
  const [newItemSection2, setNewItemSection2] = useState("")
 /*  const [postTitle, setPostTitle] = useState("")
  const [section1, setSection1] = useState() */
  const [post, setPost] = useState(initialPostState)
  const [ url, setUrl ] = useState("");


  useEffect( () => {
    if (typeof image === "object" ) {
      try {
        //console.log("TRUE")
        let imgURL = URL?.createObjectURL(image) ?? ""
        setUrl(imgURL)
      } catch (error:any) {
        console.log("error: ", error.message)
      }
    }
    },[image])
  

  const handleAddLine = () => {
    // ver forma de hacerlo sin un estado
  }
  
    const handleClick = (event:React.MouseEvent<HTMLButtonElement>|undefined) => {
      event?.preventDefault() 
      const target = event?.target as HTMLButtonElement;
      }

      const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
        event.preventDefault() 
      const name = event?.target?.name
      //console.log("name: ", name)
      
      if (name === "title" || name === "subTitle1" || name === "subTitle2") {
        //console.log("en IF")
        setPost({...post, [name]:event.target.value})
      } /* else setPost({...post, [name]:[...post[name], event.target.value]}) */
    }

    const handlechangeItem = (event:ChangeEvent<HTMLInputElement>) => {
      event.preventDefault() 
    const name = event?.target?.name
    setNewItemSection1(event.target.value) 
  }
  const handleAddRequirement = (event:React.MouseEvent<HTMLButtonElement>|undefined) => { 
    event?.preventDefault()
    const target = event?.target as HTMLButtonElement
    if(target.name = "requirement1") {
      setPost({...post, requirements1:[...post.requirements1, newItemSection1]} )
    }
  }
  const handleImage = (e:ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!e.target.files) return;
      const file =e.target.files[0]
      console.log("QWERTY: ", file)
      setImage(e.target.files[0])
    if (file) {
      imageChecker(file)
    };  
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()

    if (image) {
      formData.append("image", image )
      formData.append("title", post.title)
      formData.append("subTitle1", post.subTitle1)
      formData.append("requirements1", post.requirements1.join(","))
      formData.append("url", url)
    }
    /* const dataQuery = {
      post, 
      formData
    } */
    //console.log("post: ", post)
    console.log("fomrData: ", formData)
    //console.log("dataquery: ", dataQuery)
    const newPost = () => {
      fetch(`${process.env.BASE_URL}/api/test`, {
        method:"POST",
        /* headers: {
          'content-type': 'multipart/form-data'
        }, */
        /* body:JSON.stringify(dataQuery), */
        body:formData
      })
      .then(res => res.json())
      .then(data => console.log("data:", data))
      .catch(error => console.log(error))
    }
    newPost()
  }
  return (
    <AuthProvider>
      <header>
        <NavBarAuth />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Prueba</h1>
          <form 
            className="flex flex-col justify-center bg-slate-800 gap-2 w-full"
            onSubmit={(e) => handleSubmit(e)}  
          >
            <div className="flex-row w-full">
              <label htmlFor="title">Title</label> 
              <input 
                name="title" 
                className="text-black" 
                type="text" 
                onChange={handleChange}
                value={post.title}
                required
                />
              {/* <button onClick={handleClick} name="title">Add</button> */}
            </div>
            {/* <Input 
              name="title" 
              className="text-black" 
              handleChange={
                (event:ChangeEvent<HTMLInputElement>) => handleChange(event)} 
                title={post.title} 
            /> */}
            {/* Input de title, subTitle1 y subtitle2 */}
            <div className="flex-row w-full">
              <label htmlFor="subTitle1">Section1 titlel</label> 
              <input 
                name="subTitle1" 
                className="text-black" 
                type="text" 
                onChange={handleChange}
                value={post.subTitle1}
                required
                />
            </div>
            <br /> <br />
            <div >
              <p>Requirementes</p>
              <div className="bg-slate-500 px-5">
                {
                  post.requirements1.length > 0 
                  ? post.requirements1.map(( (el, idx) => <p key={el+idx}>{el}</p>))
                  : null
                }
              </div>
            </div>
            <div className="flex-row w-full">
              <label htmlFor="requirements1">section1 item</label> 
              <input 
                name="requirements1" 
                className="text-black" 
                type="text" 
                onChange={handlechangeItem}
                value={newItemSection1}
              />
              <button name="requirement1" onClick={handleAddRequirement} className="text-sm leading-4 flex w-28 bg-[#061c0c] rounded-md mx-auto">Add requirements1</button>
            </div>
            <br /> <br />
            <div className="flex-row w-full">
              <label htmlFor="subTitle2">Section2 title</label> 
              <input 
                name="subTitle2" 
                className="text-black" 
                type="text" 
                onChange={handleChange}
                value={post.subTitle2}
                /* required */
                />
            </div>
            <div className="flex-row w-full">
              <label htmlFor="requirements2">Section2 Item</label> 
              <input 
                name="requirements2" 
                className="text-black" 
                type="text" 
              />
            </div>
            
            <div className="flex-row w-full">
              <label htmlFor="requirements2">Upload Image</label> 
              <input 
                name="postImage" 
                className="text-black" 
                type="file" 
                accept='.jpg,.jpeg, .webP'
                max={1}
                onChange={(e:ChangeEvent<HTMLInputElement>) => handleImage(e)}
                required
              />
            </div>
            {/* <label>Section1 Title <input className="text-black" type="text" /></label>
            <label>Add item sec 1 <input className="text-black" type="text" /></label>
            <label>Section2 Title <input className="text-black" type="text" /></label>
            <label>Add item sec 1 <input className="text-black" type="text" /></label> */}
            <button type="submit">Enviar</button>
          </form>
          {/* <ImgUploader file={image} className='w-[200px] h-[200px]'/> */}
          <div className="imgContainer text-black">
        {
          url && <Image className="imgAvatar bg-white" src={url} width={150} height={150} id="img"  alt="no carga img" />
        }
      </div>
          <br />
        <button onClick={newPost}>Add Post</button>
        <button onClick={updatePost}>Update Post 2</button>
        <button onClick={deletePost}>Delete Post 13</button>
        <button onClick={getAllPosts}>Get Posts</button>
        <button onClick={()=>getOneUser("gonzagc22@gmail.com")}>Get User from DB</button>
      </main>

        </AuthProvider>
  );
}
