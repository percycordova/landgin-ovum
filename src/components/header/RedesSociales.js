import React from "react";

const RedesSociales = () => {
  return (
    <div className="flex gap-1 items-center">
      <a
        href="https://www.facebook.com/OVUM2022"
        target="_blank"
        rel="noopener"
      >
        <img
          src="/icons/facebook.svg"
          alt=""
          className="transition-all duration-300 ease-out transform hover:scale-110"
        />
      </a>
      <a
        href="https://twitter.com/ovum2022"
        target="_blank"
        rel="noopener"
      >
        <img
          src="/icons/twitter.svg"
          alt=""
          className="transition-all duration-300 ease-out transform hover:scale-110"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/ovum-congreso-latinoamericano-de-avicultura-463bab22a/"
        target="_blank"
        rel="noopener"
      >
        <img
          src="/icons/linkendin.svg"
          alt=""
          className="transition-all duration-300 ease-out transform hover:scale-110"
        />
      </a>
      <a
        href="https://www.instagram.com/ovum2022"
        target="_blank"
        rel="noopener"
      >
        <img
          src="/icons/instagram.svg"
          alt=""
          className="transition-all duration-300 ease-out transform hover:scale-110"
        />
      </a>

    </div>
  );
};

export default RedesSociales;
