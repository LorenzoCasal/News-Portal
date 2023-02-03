import Card from "../components/card-new";

export default function Tecnology() {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center gap-5">
      <div className="w-8/12 py-20">
        <div className="flex flex-row justify-center items-center gap-3 mb-10 max-sm:flex-col max-sm:gap-6">
          <Card
            img="https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/PUHDUWOGURLUJJSESSCUIPY7PE.jpg"
            title="Lorem ipsum dolor sit."
          />
          <Card
            img="https://web.catamarca.edu.ar/sitio/images/2021/encuestas-online.jpg"
            title="Lorem ipsum dolor sit"
            secondtitle="sit amet consectetur."
          />
          <Card
            img="https://d3bixyfls5nn5n.cloudfront.net/images/entry-heroes/2020/070820_desempleo_mob.jpg"
            title="Lorem ipsum dolor"
            secondtitle="sit amet consectetur, adipisicing elit."
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-3 max-sm:flex-col max-sm:gap-6">
          <Card
            img="https://img.freepik.com/vector-gratis/gente-moderna-haciendo-actividades-culturales_52683-42205.jpg?w=2000"
            title="Lorem ipsum dolor sit"
            secondtitle="sit amet consectetur."
          />
          <Card
            img="https://media.traveler.es/photos/613767d0f130191a954c742b/master/w_2000,h_1333,c_limit/161922.jpg"
            title="Lorem ipsum dolor sit"
            secondtitle="sit amet consectetur."
          />
          <Card
            img="https://media.vogue.mx/photos/5cdef96c73838bba32fac932/16:9/w_1280,c_limit/fotografi%CC%81a%20de%20paisaje%206.jpg"
            title="Lorem ipsum dolor sit"
            secondtitle="sit amet consectetur."
          />
        </div>
      </div>
    </div>
  );
}
