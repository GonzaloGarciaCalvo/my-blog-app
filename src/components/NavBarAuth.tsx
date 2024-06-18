"use client"
import Home from "@/app/page"
import Link from "next/link"
import {signIn, useSession, signOut} from "next-auth/react"

export function NavBarAuth() {
  const {data: session} = useSession()

  
  //console.log("session: ", session)
  return (
    <>
      <nav className="flex row justify-center gap-4 "> 
        <Link href={'./'} className="bg-slate-900 px-2 py-1 rounded-md">
          Home
        </Link>
        {/* <Link href={'./controlpanel'} className="bg-slate-900 px-2 py-1 rounded-md">
          ControlPanel
        </Link> */}
      {
        session?.user?
        <button onClick={async () => {
          await signOut({
            callbackUrl: "/",
          })
        }}>Log Out</button>
        :
        <button 
          onClick={()=>signIn()} 
          className="bg-slate-900 px-2 py-1 rounded-md">
            Sign In
        </button>

      }
      </nav>
    </>
  )
}
