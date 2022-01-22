// import type { ButtonHTMLAttributes } from "react";

// interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: React.ReactNode;
// }

const Button = ({ children, ...props }) => {
  return (
    <button
      className={`bg-secondary-600 text-white pt-2 pb-3 flex justify-center
     items-center w-full text-lg md:text-xl  rounded-3xl hover:opacity-80 transition-all duration-300 
     focus:outline-none focus:shadow-outline `}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
