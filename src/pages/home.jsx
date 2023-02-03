import Card from "../components/card-new";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const images = [
  "https://img.freepik.com/free-vector/isometric-people-working-with-technology_52683-19078.jpg?w=2000",
  "https://static.vecteezy.com/system/resources/previews/010/886/644/non_2x/world-map-and-horizontal-earth-planet-concept-flat-illustration-vector.jpg",
];

const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
    },
  },
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function nextStep() {
    setDirection(1);
    if (index === images.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (index === 0) {
      setIndex(images.length - 1);
      return;
    }
    setIndex(index - 1);
  }

  return (
    <div className="h-auto w-full bg-white flex flex-col justify-left items-left pl-20 mb-20 max-lg:pl-5 max-sm:pl-0 overflow-hidden">
      
      <motion.div className="w-8/12 bg-none flex flex-col gap-4 max-lg:w-full max-sm:pl-2">
        
        <motion.div className="w-full h-screen flex flex-row jusitify-center items-center gap-2">
          
          <button onClick={prevStep}>
            <BsFillArrowLeftCircleFill className="text-black text-2xl max-sm:hidden" />
          </button>

          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              src={images[index]}
              className="w-10/12 max-sm:w-11/12 max-lg:h-2/3 rounded-xl shadow-2xl shadow-black"
              variants={variants}
              animate="animate"
              initial="initial"
              exit="exit"
              key={images[index]}
              custom={direction}
            />
            <motion.div className="bg-black bg-opacity-80 h-36 w-96 rounded-xl z-30 absolute bottom-16 flex flex-col gap-1 backdrop-blur-md max-lg:bottom-40">
              <h1 className="text-white text-left text-2xl font-bebas pl-4 pt-3 ">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-white font-flow text-left text-sm pl-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing <br /> elit.
                Expedita asperiores quia libero assumenda,
                <br /> veritatis voluptatibus illum. Lorem ipsum dolor sit.
              </p>
            </motion.div>
          </AnimatePresence>

          <button onClick={nextStep}>
            <BsFillArrowRightCircleFill className="text-black text-2xl max-sm:hidden" />
          </button>

        </motion.div>

        <img
          src="undraw.svg"
          className="absolute w-1/3 right-0 max-lg:hidden"
        />

        <div className="max-sm:pl-5">
          <h1 className="text-xl text-black text-left font-inter border-l-2 border-black pl-2 max-sm:mb-5">
            More news today
          </h1>

          <motion.div
            className="w-493 h-24 bg-slate-200 rounded-md hover:shadow-md flex flex-col justify-center items-center max-sm:w-11/12"
            whileHover={{ x: 10 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <a href="">
              <h1 className="font-bebas text-xl max-md:text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </a>
            <p className="font-flow text-sm w-10/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              assumenda voluptas quis.
            </p>
          </motion.div>

          <motion.div
            className="w-493 h-24 bg-gray-800 text-white rounded-md hover:shadow-md flex flex-col justify-center items-center max-sm:w-11/12"
            whileHover={{ x: 10 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <a href="">
              <h1 className="font-bebas text-xl max-md:text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </a>
            <p className="font-flow text-sm w-10/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              assumenda voluptas quis.
            </p>
          </motion.div>

          <motion.div
            className="w-493 h-24 bg-slate-200 rounded-md hover:shadow-md flex flex-col justify-center items-center max-sm:w-11/12"
            whileHover={{ x: 10 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <a href="">
              <h1 className="font-bebas text-xl max-md:text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </a>
            <p className="font-flow text-sm w-10/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              assumenda voluptas quis.
            </p>
          </motion.div>

          <motion.div
            className="w-493 h-24 bg-gray-800 text-white rounded-md hover:shadow-md shadow-recent flex flex-col justify-center items-center max-sm:w-11/12"
            whileHover={{ x: 10 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <a href="">
              <h1 className="font-bebas text-xl max-md:text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </a>
            <p className="font-flow text-sm w-10/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              assumenda voluptas quis.
            </p>
          </motion.div>
        </div>

        <div>
          <div className="flex flex-col-col-col justify-center items-center gap-4 mt-20 max-lg:w-11/12 max-sm:w-full max-sm:flex-col">
            <Card
              img="https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/683_1_suiza_6184575765_2dc896b8ec.jpg?itok=LXDis_tB"
              title="Lorem ipsum dolor sit"
              secondtitle="amet consectetur."
            />
            <Card
              img="https://humanidades.com/wp-content/uploads/2018/10/jorge-luis-borges-e1538959415795.jpg"
              title="Lorem ipsum dolor sit"
              secondtitle="amet consectetur."
            />
            <Card
              img="https://global-uploads.webflow.com/5f5a53e153805db840dae2db/6073fbf151fa4565d48572dc_GitHub_aprender-programaci%25C3%25B3n.jpeg"
              title="Lorem ipsum dolor sit"
              secondtitle="amet consectetur."
            />
          </div>

          <div className="flex flex-col-col-col justify-center items-center gap-4 mt-20 max-lg:w-11/12 max-sm:w-full max-sm:flex-col">
            <Card
              img="https://www.eleconomista.com.mx/__export/1657860976243/sites/eleconomista/img/2022/07/14/fp-acciones1_150722w.jpg_554688468.jpg"
              title="Lorem ipsum"
              secondtitle="dolor sit amet consectetur"
            />
            <Card
              img="https://storage.googleapis.com/diariodemocracia/news/1454664428_899600_1454664476_noticia_normal-05c30b.jpeg"
              title="Lorem ipsum dolor"
              secondtitle="sit amet consectetur"
            />
            <Card
              img="https://depor.com/resizer/KMFORRGfFbz4-PGPWCb4Ea_SiaQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/W7LZD2PNL5HFHILA3CWNZV2FZY.jpg"
              title="Lorem ipsum dolor sit amet consectetur."
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-3/12 h-3/5 rounded-3xl bg-white text-black font-bebas italic shadow-recent absolute top-32 right-3 max-lg:hidden"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl text-center p-4">Last moment</h1>
        <div className="text-left text-sm flex flex-col gap-2 pl-4 ">
          <li>
            <a href="">Our planet is red and square</a>
          </li>
          <li>
            <a href="">Metronomes are a danger to humanity</a>
          </li>
          <li>
            <a href="">
              The President of Tanzania approves banknotes with <br /> negative
              values
            </a>
          </li>
          <li>
            <a href="">Thursday does not exist</a>
          </li>
          <li>
            <a href="">The sun is a good option to migrate from the planet</a>
          </li>
          <li>
            <a href="">We should all speak Zulu</a>
          </li>
          <li>
            <a href="">Elon Musk buys Mars</a>
          </li>
        </div>
      </motion.div>
    </div>
  );
}
