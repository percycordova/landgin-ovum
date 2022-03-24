import React from "react";

const Banner = ({ idiomas }) => {
  return (
    <div className="  relative z-10 py-2 text-white ">
      {/* logos  */}
      <div className="logo bg-white md:flex-row flex flex-col md:justify-center  items-center mt-3 mb-9 relative">
        <div className="hidden sm:w-full sm:flex gap-x-14 items-start justify-center mb-5">
          <img src="/asociacion.png " className="w-40 lg:w-50 xl:w-60 z-30" />
          <img src="/log-verti.png" className="w-40 lg:w-50 xl:w-50  z-30 " />
          <img src="/anavih.png " className="w:40 lg:w-50 xl:w-60  z-30" />
        </div>
        <img
          src="/logo-mobile.png"
          className="z-30 relative  sm:hidden -mt-4"
        />
        <div className=" md:absolute md:-bottom-6 -mt-7  flex gap-x-2 md:gap-x-6  md:mt-0 justify-center items-start">
          <img
            src="/Logo-organizado2 1.svg "
            alt=""
            className="sm:hidden z-30 w-80"
          />
        </div>
      </div>
      {/* fin logos */}

      <div className=" pp relative w-full  lg:-mt-64 ">
        <img
          src="/fondo-mobile-nb-top.png"
          className="-mt-20 absolute pp2  lg:hidden "
          alt=""
        />
        {/* Desktop */}
        <img
          src="/fondo-nb-top.png"
          className="absolute hidden lg:block fondo-nb-top-desktop -mt-26 z-20 "
          alt=""
        />
        <img
          src="/lineas-mobile.svg"
          alt=""
          className="absolute -top-10   lineas w-full lg:w-screen lg:hidden"
        />
        <img
          src="/lineas-desktop.svg"
          alt=""
          className="absolute  left-56 2xl:left-96 -bottom-40 2xl:-bottom-48 transform  z-10 pee hidden lg:block"
        />
        <div className="absolute bottom-0 h-20 lg:hidden bg-white w-full"></div>
        <div className="pt-36 pb-30 lg:pb-44 xl:pb-52 relative z-50  lg:pt-72">
          <p className="font-bold text-2.5xl md:text-5xl  z-20 mt-4 text-center banner__fecha">
            {idiomas.Banner.value}
          </p>
          <p className="text-center z-20 text-base md:text-4xl relative  banner__san-pedro">
            San Pedro Sula, Honduras
          </p>
          <div className="flex justify-center  z-30 mt-6 lg:absolute lg:bottom-10 2xl:bottom-16 btn-banner  w-64 mx-auto  ">
            <a
              className={`bg-secondary-600 text-white pt-2 pb-3 flex justify-center
                       items-center w-full text-lg md:text-xl  rounded-3xl 
                       hover:opacity-80 transition-all duration-300 focus:outline-none 
                       focus:shadow-outline cursor-pointer mb-4`}
              href="/pdfs/PATROCINIOS-OVUM-2022.pdf"
              target="_blank"
              rel="noopener"
            >
              {idiomas.Button.value1}
            </a>
          </div>
          {/* <img
            src="/fondo-blanco-bottom.png"
            className="absolute bottom-0  w-full    z-0 "
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
