import React from 'react'

const HamburguesBtn = ({ handleClick, show }) => {
  return (
    <button
      className={'flex  justify-center items-center  bg-primary   z-999  '}
      onClick={() => handleClick()}
    >
      {!show
        ? <svg xmlns='ttp://www.w3.org/2000/svg' width="45" height="45" viewBox="0 0 24 24" className=''>
      <path style={{ fill: '#000' }} d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
    </svg>

        : <svg
  className=''
  xmlns="http://www.w3.org/2000/svg"
  width="45"
  height="45"
  viewBox="0 0 24 24"
>
  <path
    style={{ fill: '#000' }}
    d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
  />
</svg>
      }
    </button >
  )
}

export default HamburguesBtn
