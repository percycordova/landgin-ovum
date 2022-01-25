import React from 'react'
// import type { InputHTMLAttributes } from "react";

// interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const InputText = ({ ...props }) => {
  return (
    <>
      <input
        type="text"
        className="w-full mt-1  pl-3 py-2 text-gray-600 bg-white border border-gray-500 rounded-lg outline-none focus:border-secondary-600"
        {...props}
      />
    </>
  )
}

export default InputText
