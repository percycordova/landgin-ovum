import React from "react";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary-950 text-center text-white py-4 text-sm px-10 mt-0">
     <span className="font-bold">OVUM 2022</span>  {t('DerechosReservados.1')} <span className="hidden sm:inline-block">|</span>
     {" "}{t('DesarrolladoPor.1')}
    </footer>
  );
};

export default Footer;
