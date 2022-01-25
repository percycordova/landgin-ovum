import React from "react";
import Idiomas from "../idiomas/Idiomas";
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className=" banner relative z-10 py-9 text-white">
      {/* version mobil */}
      <img
        src="/grupo-rayas2-mobil.svg"
        alt=""
        className="absolute top-0 right-0 opacity-40  md:hidden"
      />
      {/* desktop */}
      <img
        src="/grupo-rayas2.svg"
        alt=""
        className="hidden md:block absolute top-0 right-0 opacity-20 "
      />
      <Idiomas />
      <div className="logo md:flex-row flex flex-col md:justify-center mt-3 relative">
        <img src="/logo2.svg" className="z-20 relative w-140  hidden md:block " />
        <img src="/logo2-mobil.svg" className="z-20 relative  md:hidden  h-72" />
        <div className="banner__cards md:absolute md:-bottom-6  flex gap-x-2 md:gap-x-6 mt-4 md:mt-0 justify-center">
          {/* <img src="/asociacion.svg " />
          <img src="/anavih.svg " /> */}
          <img src="/Logo-organizado2 1.svg " alt="" className="md:w-80 w-60"/>
        </div>
      </div>
      <p className="font-bold text-2.5xl md:text-5xl  z-20 relative mt-10 text-center banner__fecha">
       {t('Banner.1')}
      </p>
      <p className="text-center z-20 text-base md:text-4xl relative mt-4 banner__san-pedro">
        San Pedro Sula, Honduras
      </p>
      <div className="flex justify-center relative z-20 mt-9 w-64 mx-auto ">
        <a
          className={`bg-secondary-600 text-white pt-2 pb-3 flex justify-center
                       items-center w-full text-lg md:text-xl  rounded-3xl 
                       hover:opacity-80 transition-all duration-300 focus:outline-none 
                       focus:shadow-outline cursor-pointer mb-4`}
          href="/pdfs/PATROCINIOS-OVUM-2022.pdf"
          target="_blank"
          rel="noopener"
        >
          {t("Button.1")}
        </a>
      </div>
      <div className="absolute z-20 bottom-0 banner__gradiente w-full h-4"></div>
      {/* version mobil */}
      <img
        src="/grupo-rayas-mobil.svg"
        alt=""
        className="absolute -bottom-5 left-0  md:hidden opacity-40"
      />
      {/* desktop */}
      <img
        src="/grupo-rayas.svg"
        alt=""
        className="hidden md:block absolute -bottom-44 left-0 opacity-20 "
      />
    </div>
  );
};

export default Banner;
