import CardHome from "../../components/cardHome/CardHome";
// import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import Navbar from "../../components/Navbar";
const HeroPage = () => {
  const imgUrl =
    "https://www.nps.gov/subjects/fishing/images/Mississippi-recreational-area-fishing-canoe-NPS.jpg?maxwidth=650&autorotate=false&quality=78&format=webp";
  const imgUrl1 =
    "https://www.nps.gov/subjects/fishing/images/27374286534_f699a7a8e3_o.jpg?maxwidth=1300&autorotate=false&quality=78&format=webp";
  return (
    <main className="w-full bg-fondo bg-cover min-h-screen text-white flex flex-col ">
      <div className="w-full h-[85vh] flex flex-col items-center justify-between ">
        <article className="w-full h-[60%] flex">
          <section className=" w-1/3"></section>
          <section className=" w-2/3 pr-20 py-8 flex flex-col items-start justify-center">
            <motion.h1
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="font-playfair text-5xl text-left font-bold"
            >
              El contacto con la naturaleza
              <br />
              es la clave a la paz de uno mismo
            </motion.h1>
            <motion.button
              variants={fadeIn("left", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="btn  btn-secondary mt-4 font-playfair text-xl"
            >
              Unete a la comunidad de pescadores
            </motion.button>
          </section>
        </article>
        <footer className=" w-full h-[40%] flex justify-start px-20 py-6  ">
          <motion.div
            variants={fadeIn("left", 1.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-64 h-full  mr-8 "
          >
            <CardHome
              img={imgUrl}
              title="Torneo"
              text="Hermosos ejemplares de peces "
            />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 1.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-64 h-full "
          >
            <CardHome
              img={imgUrl1}
              title="Campings"
              text="Lista de nuestros mejores campings en la zonas del Parana"
            />
          </motion.div>
        </footer>
      </div>
    </main>
  );
};

export default HeroPage;
