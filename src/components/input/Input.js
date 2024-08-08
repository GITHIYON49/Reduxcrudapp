import React from 'react'

const Input = ({placeholder,onChange,value}) => {
  return <>
  <input className={`w-full border-2 border-gray-400 p-2 rounded-lg`} onChange={onChange} placeholder={placeholder} value={value}/>
  </>
}

export default Input