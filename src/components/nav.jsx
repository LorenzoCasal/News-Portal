import { NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

export default function Nav() {
  const { scrollYProgress } = useScroll();

  return (
    <nav className="w-full h-auto bg-black text-white text-lg space-x-3 z-50 text-center font-bebas top-0 fixed">
      <NavLink to="/">
        <motion.img
          src="logo.ico"
          className="w-4 h-auto ml-2 mt-1 absolute"
          whileHover={{ rotate: 23 }}
          onHoverStart={(e) => {}}
          onHoverEnd={(e) => {}}
        />
      </NavLink>
      <NavLink to="/social">Social</NavLink>
      <NavLink to="/sport">Sport</NavLink>
      <NavLink to="/culture">Culture</NavLink>
      <NavLink to="/economy">Economy</NavLink>
      <NavLink to="/politics">Politics</NavLink>
      <NavLink to="/technology">Tecnology</NavLink>
      <motion.div
        className="bg-yellow-400 absolute w-full h-1 top-7 -left-3 "
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  );
}
