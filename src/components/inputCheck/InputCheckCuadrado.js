import React from "react";

const InputCheckCuadrado = ({
  name,
  id,
  isAccepted = false,
  handleConfirmation,
}) => {
  return (
    <div className="mt-7 flex items-center">
      <input type="checkbox" name={name} id={id} className="hidden" />
      <label
        htmlFor={id}
        className="pl-8 relative cursor-pointer text-sm"
        onClick={handleConfirmation}
      >
        Acepto la{" "}
        <span className="font-bold border-b border-black">
          política de privacidad
        </span>
        <span
          className={`absolute flex justify-center items-center w-6 h-6 
                 border-secondary-600 border-2 rounded-md left-0 top-0 `}
        >
          {isAccepted && <img src="/icons/check.svg" alt="" />}
        </span>
      </label>
    </div>
  );
};

export default InputCheckCuadrado;
