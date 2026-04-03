import type { ReactElement } from "react"

interface ButtonProps{
  varient:"primary" | "secondary" | "tertiary",
  text:string,
  startIcon?:ReactElement,
  classExtra?:string,
  onClick? : ()=> void
}

const varientStyles = {
  primary: "px-6 py-2 text-slate-600 hover:text-slate-900 transition-all font-medium shadow-lg hover:shadow-xl rounded-full",
  secondary: "px-6 py-2 bg-[#3e3e3e] text-white rounded-full hover:bg-black transition-all shadow-lg hover:shadow-2xl",
  tertiary:"px-10 py-4 bg-[#bda06d] text-white rounded-xl text-lg font-bold hover:scale-105 transition-transform shadow-2xl" 
}


const Button = (props:ButtonProps) => {
  return (
    <button onClick={props.onClick} className={`${varientStyles[props.varient]} ${props.classExtra}`}>{(props.startIcon)? props.startIcon : null}{props.text}</button>
  )
}

export default Button