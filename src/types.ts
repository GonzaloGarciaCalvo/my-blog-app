import { ChangeEvent } from "react"

export type post = {
  title:String 
  description:String
  image?: String
  video?:String
}

export type postStateType = {
  title:string,
  subTitle1: string,
  requirements1:string[],
  subTitle2: string,
  requirements2:string[]
}

export type inputProp ={ 
  name:string
  className: string
  handleChange: (event:ChangeEvent<HTMLInputElement>)=>void
  title: string
}