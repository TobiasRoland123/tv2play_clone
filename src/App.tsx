import "./App.css";
import { Tv2_header } from "./Tv2_header";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Tv2_carousel } from "./Tv2_carousel";
import { Tv2_button } from "./Tv2_button";
import { Tv2_trailerFrame } from "./Tv1_trailerFrame";

function App() {
  return (
    <>
      <Tv2_header bgColor="bg-bg_col" />
      <Tv2_carousel />

      <div className="my-8 flex flex-col justify-center">
        <div className=" mb-4 mx-auto">
          <Tv2_button
            btnType="secondary"
            label="Prøv Basis i 7 dage gratis*"
            size="large"
          />
        </div>
        <small className="text-white text-center"> *gælder kun basis</small>
      </div>

      <section className=" px-3">
        <Tv2_trailerFrame src="https://www.youtube.com/embed/dDK_u-lx1c0" />
        <article className=" mt-6 pr-10">
          <h2 className=" text-4xl leading-tight font-bold">Agent - ny komedieserie på TV 2 Play</h2>
          <p className=" text-lg  leading-snug">
            Nikolaj Lie Kaas' komediedramaserie om Joe, der arbejder som agent for stjerner i underholdningsbranchen. Men det går
            ikke helt så godt, som det kunne. Se Esben Smed i hovedrollen som Joe og et stort, stjernespækket cast.
          </p>
        </article>
      </section>
    </>
  );
}

export default App;
