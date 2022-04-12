import React from "react";

const BannerLanding = () => {
  return (
    <section className="relative z-10  w-full flex items-center justify-center h-128 lg:h-90 m-auto  bg-center bg-cover custom_img ">
      <div className="w-full md:max-w-256 mt-5 max-w-7xl mx-auto text-white  z-20">
        {/* version desktop */}
        <div className=" hidden md:flex-row  justify-between md:flex">
          <img src="/bakcc.png" alt="" className="absolute right-0 top-2" />
          <img
            src="/edificio.png"
            alt=""
            className="absolute bottom-0 right-0 "
          />
          <div className=" max-w-120 ">
            <p className="text-3xl text-center relative z-20  mb-9">
              ¿Quieres participar de{" "}
              <span className="font-bold">OVUM 2022</span>
              en Honduras?
            </p>
            <div className="flex justify-center w-full   ">
              <button className=" bg-pink-700 relative z-20 text-white text-xl font-normal py-3 max-w-52 w-full rounded-full ">
                Consultanos
              </button>
            </div>
          </div>

          <div className="max-w-90 w-full  -mt-4">
            <img
              src="/imagen-banner.png"
              alt=""
              className=" w-full h-auto relative z-20"
            />
          </div>
        </div>
        {/* version mobile */}
        <div className="px-10 flex flex-col md:hidden items-center justify-center">
          <img src="/bakcc-mobile.png" alt="" className="absolute top-36" />
          <img
            src="/edificio-mobile.png"
            alt=""
            className="absolute z-20 bottom-0 "
          />
          <p className="text-3xl text-center relative z-20  mb-9">
            ¿Quieres participar de <span className="font-bold">OVUM 2022</span>
            en Honduras?
          </p>
          <div className="max-w-90 w-full  mb-11">
            <img
              src="/imagen-banner.png"
              alt=""
              className=" w-full h-auto relative z-20"
            />
          </div>
          <div className="flex justify-center w-full md:hidden  ">
            <button className=" bg-pink-700 relative z-20 text-white text-xl font-normal py-3 max-w-52 w-full rounded-full ">
              Consultanos
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-black w-full h-128 lg:h-90 top-0 flex justify-center absolute opacity-50 "></div> */}
    </section>
  );
};

export default BannerLanding;
