import React, { useState } from "react";
import InputText from "../inputs/InputText";

const AcordionPagoAnticipado = ({
  onChange = () => {},
  onRemove = () => {},
  nombres,
  apellidos,
  dni,
  correo,
  ciudad,
  cargo,
  celular,
  alergias,
  esInvitado,
  empresa,
  index,
  tamañoArray
}) => {
  const [mostrar, setMostrar] = useState(false);
  return (
    <div className={`${mostrar && "pb-8"}`}>
      <div className="py-3 relative bg-secondary-600 mb-7 rounded-lg">
        <p className="text-white text-center font-semibold">
          Datos del participante {index + 1}
        </p>
        <p
          className="text-white font-bold absolute top-2 p-1 right-20 cursor-pointer"
          onClick={() => {
            if (tamañoArray > 1) {
              onRemove();
            }
          }}
        >
          Eliminar
        </p>
        <img
          src="/icons/flecha-hacia-abajo.png"
          alt=""
          className={`absolute top-2 right-2 p-1 transform ${
            mostrar ? "rotate-0" : "rotate-180"
          } transition-all ease-in-out duration-300 cursor-pointer`}
          onClick={() => setMostrar(!mostrar)}
        />
      </div>
      <div className="">
        {mostrar && (
          <>
            <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-15 mb-4">
              <div className="w-full">
                <label className="text-xs text-gray-600 sm:text-base">
                  Nombres*{" "}
                </label>
                <InputText
                  onChange={(e) => onChange("nombres", e.target.value)}
                  value={nombres}
                />
              </div>
              <div className="w-full">
                <label className="text-xs text-gray-600 sm:text-base">
                  Apellidos*{" "}
                </label>
                <InputText
                  onChange={(e) => onChange("apellidos", e.target.value)}
                  value={apellidos}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-15 mb-4">
              <div className="w-full">
                <label className="text-xs text-gray-600 sm:text-base">
                  DNI*{" "}
                </label>
                <InputText
                  onChange={(e) => onChange("dni", e.target.value)}
                  value={dni}
                />
              </div>
              <div className="w-full">
                <label className="text-xs text-gray-600 sm:text-base">
                  Correo*{" "}
                </label>
                <InputText
                  onChange={(e) => onChange("correo", e.target.value)}
                  value={correo}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:gap-x-15 mb-4">
              <div className="w-full">
                <label className="text-xs text-gray-600 sm:text-base">
                  Ciudad*
                </label>
                <InputText
                  onChange={(e) => onChange("ciudad", e.target.value)}
                  value={ciudad}
                />
              </div>
              <div className="w-full">
                <label className="text-xs text-gray-600 sm:text-base">
                  Cargo*
                </label>
                <InputText
                  onChange={(e) => onChange("cargo", e.target.value)}
                  value={cargo}
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-4 lg:flex-row lg:items-start lg:gap-x-15 mb-4">
              <div className="w-full">
                <label className="text-xs text-gray-600 sm:text-base">
                  Celular*
                </label>
                <InputText
                  onChange={(e) => onChange("celular", e.target.value)}
                  value={celular}
                />
              </div>
              <div className="w-full">
                <label className="text-xs text-gray-600 sm:text-sm">
                  Sufres algún tipo de Alergia, Hipertensión, Diabetes u otro?
                </label>
                <InputText
                  onChange={(e) => onChange("alergias", e.target.value)}
                  value={alergias}
                />
                <span className="text-xs text-gray-600 font-light sm:text-sm">
                  Si respondes Si, menciona cuales
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center mt-2 lg:gap-x-15 mb-4">
              <div className="w-full flex items-center">
                <input
                  type="checkbox"
                  className="w-6 h-6 rounded-md"
                  value={esInvitado}
                  onChange={(e) => {
                    onChange("esInvitado", e.target.checked);
                  }}
                />
                <label className="text-xs text-gray-600 sm:text-base ml-4">
                  Invitado
                </label>
              </div>
              <div className="w-full">
                <label className="text-xs text-gray-600 sm:text-base">
                  Empresa
                </label>
                <InputText
                  onChange={(e) => onChange("empresa", e.target.value)}
                  value={empresa}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AcordionPagoAnticipado;
