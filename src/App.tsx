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
import { Tv2_uspSet } from "./Tv2_uspSet";
import { Tv2_planSet } from "./tv2_planSet";

function App() {
  return (
    <>
      <Tv2_header bgColor="bg-bg_col" />
      <Tv2_carousel />

      <div className="my-10 flex flex-col justify-center">
        <div className=" mb-4 mx-auto">
          <Tv2_button
            btnType="secondary"
            label="Prøv Basis i 7 dage gratis*"
            size="large"
          />
        </div>
        <small className="text-white text-center"> *gælder kun basis</small>
      </div>

      <section className=" px-3 py-10 flex flex-col xl:grid  xl:grid-cols-2 xl:gap-10 xl:px-10">
        <Tv2_trailerFrame src="https://www.youtube.com/embed/dDK_u-lx1c0" />
        <article className=" mt-6 pr-10 xl:w-4/5 xl:flex xl:justify-center xl:flex-col xl:mx-auto ">
          <h2 className=" text-4xl leading-tight font-bold">Agent - ny komedieserie på TV 2 Play</h2>
          <p className=" text-lg  leading-snug max-w-prose">
            Nikolaj Lie Kaas' komediedramaserie om Joe, der arbejder som agent for stjerner i underholdningsbranchen. Men det går
            ikke helt så godt, som det kunne. Se Esben Smed i hovedrollen som Joe og et stort, stjernespækket cast.
          </p>
        </article>
      </section>
      <section className=" py-14">
        <Tv2_uspSet
          set={[
            {
              usp0: [
                {
                  heading: "7 dage til 0 kr",
                  description: "Få 7 dages TV 2 Play til 0 kr. \n ved køb af Basispakken",
                  iconName: "gift",
                  iconAlt: "gift icon",
                },
              ],
              usp1: [
                {
                  heading: "Ingen binding",
                  description: "Med TV 2 Play er der ingen \n binding eller skjulte gebyrer",

                  iconName: "lock",
                  iconAlt: "lock icon",
                },
              ],
              usp2: [
                {
                  heading: "Det bedste - samlet ét sted",
                  description: "Kun med TV 2 Play får du de største film og \n serier samt det bedste fra TV 2s kanaler",
                  iconName: "diamond",
                  iconAlt: "diamond icon",
                },
              ],
            },
          ]}
        />
      </section>

      <section className=" xl:max-w-1313 py-14  px-3 flex justify-center flex-col mx-auto max-w-plan-width ">
        <div className="pb-6 lg:pb-10 ">
          <h2 className=" text-3xl leading-5 font-bold">Vælg din pakke</h2>
          <p className=" text-sm leading-10">afmeld når som helst - ingen binding</p>
        </div>
        <Tv2_planSet />
      </section>
      <section className=" pt-4 pb-14">
        <Tv2_uspSet
          set={[
            {
              usp0: [
                {
                  heading: "",
                  description: "Afmeld når som helst",
                  iconName: "heartbroken",
                  iconAlt: "broken heart  icon",
                },
              ],
              usp1: [
                {
                  heading: "",
                  description: "Se på alle enheder \n i din husstand",

                  iconName: "devices",
                  iconAlt: "devices icon",
                },
              ],
              usp2: [
                {
                  heading: "",
                  description: "Tag TV 2 Play med på ferien i hele EU \n og se både live og demand",
                  iconName: "diamond",
                  iconAlt: "diamond icon",
                },
              ],
            },
          ]}
        />
      </section>
    </>
  );
}

export default App;
