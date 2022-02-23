import React from 'react'

const BannerLanding = () => {
  return (

    <section className="relative  w-full flex items-center justify-center h-128 lg:h-90 m-auto  bg-center bg-cover custom_img ">
      <div className="w-full md:w-9/12 mt-5 max-w-7xl mx-auto text-white z-20">
        <div className="p-10 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full">
            <h2 className='text-3xl leading-10 lg:leading-normal font-extralight lg:text-4xl 2xl:text-5xl text-center lg:w-4/5'>¿Quieres participar de <strong className='font-semibold'>OVUM 2022</strong> en Honduras?</h2>
            <div className="hidden md:flex justify-center mt-8 w-4/5">
              <button className="bg-pink-700 text-white text-xl font-normal py-2 max-w-52 w-full rounded-full z-10">
                Consultanos
              </button>
            </div>
          </div>
          <div className="max-w-90 w-full mt-5">
            <img src="/imagen-banner.png" alt="" className=' w-full h-auto' />
          </div>
          <div className="flex justify-center w-full md:hidden  mt-8 ">
            <button className=" bg-pink-700 text-white text-xl font-normal py-2 max-w-52 w-full rounded-full z-10">
              Consultanos
            </button>
          </div>
        </div>

      </div>
      <div className="bg-black w-full h-128 lg:h-90 top-0 flex justify-center absolute opacity-50 "></div>
    </section>

  )
}

export default BannerLanding
