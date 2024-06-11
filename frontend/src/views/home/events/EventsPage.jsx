import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EventsPage = () => {
  const containerRef = useRef(null); // Ref para el contenedor
  const [containerWidth, setContainerWidth] = useState(0); // Estado para el ancho del contenedor

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.clientWidth); // Establece el ancho del contenedor
    }
  }, []);

  return (
    <main className="pt-16 w-screen h-screen flex flex-col items-center overflow-hidden">
      <div className="flex max-w-screen-2xl w-full items-center h-full flex-col">
        <section className="bg-zinc-500 w-full flex px-4 flex-row max-h-16">
          <h1 className="text-stone-300 text-5xl my-auto font-bold">Eventos</h1>
          <div ref={containerRef} className="w-full h-full  relative">
            <motion.object
              type="image/svg+xml"
              data="/hook.svg"
              style={{ rotate: "-90deg", height: "100%" }}
              initial={{ x: 100 }} // Comienza fuera del contenedor
              animate={{
                x: [
                  100,
                  containerWidth - 50,
                  containerWidth - 60,
                  containerWidth - 100,
                ],
              }} // Rebote al final
              transition={{
                duration: 2.5, // Duración total de la animación en segundos
                times: [0, 0.4, 0.5, 0.6], // Tiempos de las fases de la animación
                ease: ["easeInOut", "easeInOut", "easeOut", "easeOut"], // Suavizado de la animación
              }}
            ></motion.object>
          </div>
        </section>
        <section className="text-white w-full px-6 flex gap-6 py-4 flex-1 flex-col overflow-y-auto">
          <EventPromoComponent />
          <EventPromoComponent />
          <EventPromoComponent />
        </section>
      </div>
    </main>
  );
};

export default EventsPage;

const EventPromoComponent = () => {
  return (
    <div className="w-full border border-zinc-500 rounded-lg">
      <img src="/save-the-date-02.jpg" alt="" />
      <div className="p-4">
        <h3 className="font-playfair text-2xl">
          Torneo anual de pesca Salinas Yacht Club 2024 (Catch and Release)
        </h3>
        <h4>Días:</h4>
        <p>Junio 24 del 20204</p>
        <h4>Premios:</h4>
        <p>
          <b>Primer Lugar:</b> $400 <b>Segundo Lugar:</b> $400{" "}
          <b>Tercer Lugar:</b> $400
        </p>
      </div>
    </div>
  );
};
