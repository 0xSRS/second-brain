import type { ReactElement } from "react"

interface ButtonProps{
  varient:"primary" | "secondary",
  text:string,
  startIcon?:ReactElement
}

const varientStyles = {
  primary: "text-white font-semibold bg-primary hover:bg-primary-h",
  secondary: "text-white bg-secondary hover:bg-secondary-h"
}

const defaultSyles = "rounded-xl p-2 p-1 min-w-25 transition-all duration-400 active:scale-90 flex items-center justify-center gap-2 "

const Button = (props:ButtonProps) => {
  return (
    <button className={`${varientStyles[props.varient]} ${defaultSyles}`}>{(props.startIcon)? props.startIcon : null}{props.text}</button>
  )
}

export default Button