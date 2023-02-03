import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <motion.div
      className="w-2/6 h-auto rounded-md bg-white shadow-sm shadow-black text-black flex flex-col text-center max-sm:w-4/5"
      whileHover={{ x: 10 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
    >
      <img src={props.img} className="rounded-md" />
      <h1 className="text-xl font-inter font-bold">
        {props.title} <br /> {props.secondtitle}
      </h1>
      <p className="text-xs font-inter font-normal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia porro
        nesciunt officia.
      </p>

      <button className="bg-black text-white w-24 p-1 rounded-xl font-inter text-sm mx-auto my-4">
        <Link
          to={`/article/${props.title}`}
          state={{
            img: `${props.img}`,
            title: `${props.title}`,
          }}
        >
          Read more
        </Link>
      </button>
    </motion.div>
  );
}
