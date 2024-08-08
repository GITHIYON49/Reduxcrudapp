import React from 'react'

const Button = ({className,icon,handleClick,type}) => {
  return <>
  <button className={`${className} flex items-center justify-center gap-1 text-white capitalize text-lg rounded-md px-4 py-2`} type={type} onClick={handleClick}>{icon}button</button>
  </>
}

export default Button