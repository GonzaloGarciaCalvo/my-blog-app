"use client"
import Image from "next/image";

import { deletePost, getAllPosts, getOnePost, getOneUser, newPost, updatePost } from "../../utils/fetchFunctions";
import { AuthProvider } from "@/components/authProvider";
import { NavBarAuth } from "@/components/NavBarAuth";
import "../globals.css";

export default function Login () {
  
    /* useEffect(() => {
      getOnePost()
    },[]) */
  
  return (
    <AuthProvider>
      <header>
        <NavBarAuth />
      </header>
        </AuthProvider>
  );
}