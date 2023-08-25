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
import { Tv2_collapsible } from "./Tv2_collapsible";
import { Tv2_sportSlider } from "./Tv2_sportSlider";

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

      <section className=" max-w-1313 lg:px-14">
        <Tv2_collapsible text="Du har også mulighed for at købe en eller to livekanaler med binding">
          <>
            <article className=" py-10 grid grid-cols-12 gap-x-6 gap-y-6">
              <div className="flex flex-col col-start-1 col-end-9 gap-1">
                <h3 className=" text-2xl font-bold leading-5">Vælg en eller to livekanaler</h3>
                <p className=" leading-6">
                  Vær opmærksom på, at du med livekanaler ikke får adgang til eventkanalerne, og livekanaler kan ikke kombineres
                  med andre pakker
                </p>
              </div>

              <div className=" col-start-1 col-end-13  flex-row flex flex-wrap gap-2  items-start">
                <div className="bg-white w-28 h-12 flex justify-center items-center">
                  <img
                    className="  h-6 "
                    src="./public/includes/black/tv2.png"
                    alt="tv2 logo"
                  />
                </div>
                <div className="bg-white w-28 h-12 flex justify-center items-center">
                  <img
                    className="  h-6 "
                    src="./public/includes/black/tv2news.png"
                    alt="tv2 logo"
                  />
                </div>
                <div className="bg-white w-28 h-12 flex justify-center items-center">
                  <img
                    className="  h-6 "
                    src="./public/includes/black/tv2echo.png"
                    alt="tv2 logo"
                  />
                </div>
                <div className="bg-white w-28 h-12 flex justify-center items-center">
                  <img
                    className="  h-6 "
                    src="./public/includes/black/tv2charlie.png"
                    alt="tv2 logo"
                  />
                </div>
                <div className="bg-white w-28 h-12 flex justify-center items-center">
                  <img
                    className=" h-6 "
                    src="./public/includes/black/tv2fri.png"
                    alt="tv2 logo"
                  />
                </div>
              </div>
              <div className="flex flex-col col-start-1 col-end-9">
                <p className="block">Vælg mindst 1 kanal</p>
                <p>6 måneders binding: 412 kr. for hele perioden</p>{" "}
              </div>
              <div className="col-start-1 col-end-9">
                <Tv2_button
                  label="69 kr./md."
                  size="small"
                  btnType="disabled"
                />
              </div>
            </article>
          </>
        </Tv2_collapsible>

        <Tv2_collapsible text="Har du en gavekode?">
          <article>
            <input type="text" />
            <Tv2_button
              label="Indløs"
              btnType="disabled"
              size="small"
            />
          </article>
        </Tv2_collapsible>
      </section>

      <article className=" max-w-1313 lg:px-14 ">
        <div className="py-10">
          <div className="flex justify-center">
            <Tv2_button
              label="Prøv Basis i 7 dage gratis*"
              size={"small"}
              btnType={"secondary"}
            />
          </div>
          <p className=" text-xs leading-6 text-center mt-3">*gælder kun basis</p>
        </div>
        <div className=" px-3 ">
          <h3 className=" text-3xl leading-7 font-bold"> Alle TV 2s kanaler, samlet ét sted</h3>
          <p className=" text-base leading-6 mt-2 max-w-prose">
            Med TV 2 Play får du det bedste indhold fra alle TV 2s syv kanaler - når du vil, og hvor du vil. Bliv opdateret på
            dagens nyheder, følg med i din favorit-sportsgren eller grin til knivskarp comedy.
          </p>
        </div>
      </article>

      <section className=" pt-10 pl-3 md:px-16 md:flex justify-center flex-col">
        <h2 className=" text-xl font-medium leading-5 mb-4">Sport på Tv 2 Play</h2>
        <Tv2_sportSlider
          sliderSet={[
            { image: "fodbold", text: "UEFA Europa League, LaLiga og serie A", sportType: "fodbold" },
            { image: "cykling", sportType: "cykling", text: "Grand Tours og forårsklassikere" },
            { image: "amerikansk_fodbold", sportType: "Amerikansk fodbold", text: "NFL-kampe og Super Bowl" },
            { image: "badminton", sportType: "Badminton", text: "De største turneringer" },
            { image: "håndbold", sportType: "Håndbold", text: "EM og VM, samt liga for både " },
            { image: "tennis", sportType: "Tennis", text: "ATP og WTA" },
            { image: "basketball", sportType: "Basketball", text: "NBA direkte fra USA" },
            { image: "skiskydning", sportType: "Skiskydning", text: "World Cup og VM" },
          ]}
        />
      </section>
      <div className="py-10">
        <div className="flex justify-center">
          <Tv2_button
            label="Kom i gang med Tv 2 Play"
            size={"small"}
            btnType={"secondary"}
          />
        </div>
        <p className=" text-xs leading-6 text-center mt-3">Prøv nu - ingen binding</p>
      </div>
      <section className=" pt-4 pb-14 max-w-1313 ">
        <Tv2_uspSet
          set={[
            {
              usp0: [
                {
                  heading: "Oplev Tv2 Play",
                  description: "Se det store udvalg af serier, \n dokumentarer, comedy m.m.",
                  iconName: "glasses",
                  iconAlt: "glasses  icon",
                },
              ],
              usp1: [
                {
                  heading: "Hvor kan jeg se TV 2 Play?",
                  description: "Få overblik over de platforme, der \n understøtter TV 2 Play",

                  iconName: "devices",
                  iconAlt: "devices icon",
                },
              ],
              usp2: [
                {
                  heading: "Har du spørgsmål?",
                  description: "Find hjælp i vores kundecenter eller \n kontakt vores kundeservice",
                  iconName: "headset",
                  iconAlt: "headset icon",
                },
              ],
              usp3: [
                {
                  heading: "Giv et gavekort til TV 2 Play",
                  description: "Giv et TV 2 Play-abonnement på enten 30 \n eller 90 dage",
                  iconName: "gift",
                  iconAlt: "gift icon",
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
