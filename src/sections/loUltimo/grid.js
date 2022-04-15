import React, { useState } from "react";
import CardGrid from "../../components/cardGrid";
import ModalGrid from "../../components/ModalGenerico/ModalGrid";
import useBlogServices from "../../Gestionadores/useBlogServices";

const Grid = ({ openModal, closeModal, isOpen }) => {
  const { loadingGetData, db } = useBlogServices();
  // console.log('db',db);
  const [initialSlide, setInitialSlide] = useState(0);
  return (
    <div className="lg:w-256 max-w-7xl mx-auto">
      <section className="relative bg-white flex flex-col justify-center items-center py-14">
        <div className="w-full mt-5 max-w-7xl mx-auto p-8 lg:p-0">
          <h6 className="text-3.5xl  text-center font-medium mb-8">
            LO ÚLTIMO
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {loadingGetData ? (
              <div>Cargando ....</div>
            ) : (
              db.map((item, i) => (
                <CardGrid
                  key={item.blogId}
                  item={item}
                  index={i}
                  onClick={() => {
                    // console.log({ i })
                    setInitialSlide(i);
                    openModal();
                  }}
                />
              ))
            )}
          </div>
        </div>
      </section>
      <ModalGrid
        isOpen={isOpen}
        closeModal={closeModal}
        data={db}
        initialSlide={initialSlide}
        setInitialSlide={setInitialSlide}
      />
    </div>
  );
};

export default Grid;
