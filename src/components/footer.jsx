import { ImMail4, ImLocation } from "react-icons/im";
import { BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full h-96 bg-black flex flex-row justify-center items-center max-sm:gap-12">
      <div className="w-2/5 max-sm:hidden">
        <img src="logo.png" className="w-60 h-auto" />
      </div>
      <div className="w-2/5 flex flex-col max-md:w-1/5 max-sm:ml-2">
        <h1 className="text-xl text-white font-bebas border-l-2 border-white mb-3 pl-2">
          Navegation
        </h1>
        <Link
          to="/social"
          className="text-base max-sm:text-sm text-white border-l-2 border-white pl-2"
        >
          ֍Social
        </Link>
        <Link
          to="/sport"
          className="text-base max-sm:text-sm text-white border-l-2 border-white pl-2"
        >
          ֍Sport
        </Link>
        <Link
          to="/culture"
          className="text-base max-sm:text-sm text-white border-l-2 border-white pl-2"
        >
          ֍Culture
        </Link>
        <Link
          to="/economy"
          className="text-base max-sm:text-sm text-white border-l-2 border-white pl-2"
        >
          ֍Economy
        </Link>
        <Link
          to="/politics"
          className="text-base max-sm:text-sm text-white border-l-2 border-white pl-2"
        >
          ֍Politics
        </Link>
        <Link
          to="/technology"
          className="text-base max-sm:text-sm text-white border-l-2 border-white pl-2"
        >
          ֍Technology
        </Link>
      </div>

      <div className="w-2/5 flex flex-col gap-2 text-white">
        <h1 className="text-xl font-bebas border-l-2 border-white mb-3 pl-2">
          Contact us
        </h1>
        <div>
          <BsTelegram className="text-xl float-left mr-2" />
          <p className="text-base">+36 333 2222 1111</p>
        </div>
        <div>
          <ImMail4 className="text-xl float-left mr-2" />
          <p className="text-base">knowledge@newspaper.com</p>
        </div>
        <div>
          <ImLocation className="text-xl float-left mr-2" />
          <p
            className="opacity-50 hover:opacity-70 cursor-pointer "
            onClick={() => {
              window.open(
                "https://www.google.com/maps/place/490+8th+Ave,+New+York,+NY+10001,+EE.+UU./@40.7525334,-73.9950649,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259adc6aea809:0x4594bc32db0fab7!8m2!3d40.7525294!4d-73.9928762?hl=es",
                "_blank"
              );
            }}
          >
            490 8th Ave, New York, NY 10001, Estados Unidos
          </p>
        </div>
        <hr className="w-4/5" />
        <footer className="font-inter text-sm">
          &#169; Knowledge Company. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
