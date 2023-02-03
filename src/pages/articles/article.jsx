import { ImMail4, ImLinkedin, ImTelegram } from "react-icons/im";
import { useLocation } from "react-router-dom";

export default function Article(props) {
  const location = useLocation();
  const { img, title } = location.state;

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <img src={location.state.img} className="w-full saturate-100" />
        <div className="h-auto w-auto p-4 bg-black text-white bg-opacity-80 rounded-xl z-30 absolute bottom-10 left-2 flex flex-col gap-1 backdrop-blur-md max-lg:bottom-40 max-md:hidden">
          <h1 className="text-6xl font-bebas pt-2 indent-4">
            {location.state.title}
          </h1>
          <p className="text-base font-inter ml-8 w-10/12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
            consectetur eaque eos.
          </p>
        </div>
      </div>

      <div className="h-screen w-full flex flex-col justify-center items-center gap-2 font-inter font-normal max-sm:gap-3">
        <h1 className="text-2xl font-bebas italic self-start ml-24">
          Lorem ipsum dolor?
        </h1>
        <p className="w-10/12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic corporis
          fugit quam a quos inventore quia, voluptas animi iure ea sit, natus
          molestiae culpa neque architecto. <b>Quo repellendus deleniti facilis
          cumque architecto?</b>
        </p>
        <p className="w-10/12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere optio
          laboriosam magni ullam cupiditate <b>culpa delectus corporis</b> voluptas
          consequatur! Saepe omnis perspiciatis quasi ipsam temporibus quisquam,
          vel dolorem exercitationem quia recusandae inventore similique quos
          perferendis dolore enim possimus, <b>eos voluptatem nam architecto
          doloremque labore</b>, ratione adipisci cum. Voluptatem doloribus omnis
          perferendis quibusdam, tempora nesciunt nisi non libero! Nisi maxime
          enim dolorem accusantium, voluptatibus corrupti odit similique labore.
        </p>
        <p className="w-10/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi atque
          ab commodi quia ratione voluptas quae tenetur sit inventore nostrum?
          Maxime, cupiditate saepe?
        </p>
      </div>

      <div className="w-full h-auto flex flex-row max-md:flex-col p-20">
        <img
          src="https://previews.123rf.com/images/jemastock/jemastock1707/jemastock170709172/82004678-ilustraci%C3%B3n-de-vector-de-hombre-personaje-cara-perfil-de-dibujos-animados-icono.jpg"
          className="w-36 h-auto rounded-full border-solid border-black border-2 mr-4"
        />
        <div className="w-5/12 h-auto pt-8 mr-2 border-r-2 border-black max-md:border-r-0 max-md:mb-5 max-md:w-10/12">
          <h1 className="text-2xl font-bebas">Leonard Roussef</h1>
          <p className="text-base font-inter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            omnis officia tempora.
          </p>
        </div>

        <div className="text-black w-1/3 max-md:w-11/12">
          <h1 className="text-2xl font-bebas">Contact</h1>
          <div>
            <ImMail4 className="text-md float-left mr-2 mt-1" />
            <p className="font-inter">loremipsumdolor@sit.com</p>
          </div>
          <div>
            <ImLinkedin className="text-md float-left mr-2 mt-1" />
            <a href="" className="font-inter">
              Linkedin Profile
            </a>
          </div>
          <div>
            <ImTelegram className="text-md float-left mr-2 mt-1" />
            <p className="font-inter">+78 188 1222 2222</p>
          </div>
        </div>
      </div>
    </div>
  );
}
