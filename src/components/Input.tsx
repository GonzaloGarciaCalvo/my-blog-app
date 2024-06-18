import { inputProp } from "@/types"
import { ChangeEvent } from "react"





// FALTA pasar estilos mejor, el label
export default function Input({name, className, handleChange, title}:inputProp) {
  return (
    <div className="flex-row w-full">
      <label htmlFor="title">Title</label> 
      <input 
        name={name}
        className="text-black" 
        type="text" 
        onChange={handleChange}
        value={title}
        required
        />
      {/* <button onClick={handleClick} name="title">Add</button> */}
    </div>
  )
}