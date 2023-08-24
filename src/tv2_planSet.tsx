import { Tv2_plan } from "./Tv2_plan";

export const Tv2_planSet = () => {
  const titleForadd = "SkyShowTime";
  const textForAddBold = "Prøv SkyShowtime gratis i 14 dage";
  const textForAddNormal = "Herefter 60 kr./md. Ingen binding";
  return (
    <>
      <section
        className=" flex flex-col gap-4 xl:grid xl:grid-cols-3 
     xl:grid-rows-2"
      >
        <div>
          <Tv2_plan
            heading="Basis"
            usp="Prøv gratis i 7 dage"
            priceAdds={69}
            priceNoAdds={99}
            add={[{ addTitle: titleForadd, addTexBold: textForAddBold, addTextNormal: textForAddNormal, addLogo: "skyshowtime" }]}
            included={[
              { text: "TV 2s on demand-programmer med nyt indhold og snigpremierer hver dag" },
              { text: "Nyhed! Nu endnu mere indhold.Se mere", logo: ["cmore", "sfkids"] },
            ]}
            mostPopular={false}
          />
        </div>
        <div>
          <Tv2_plan
            heading="Favorit"
            usp="Se live-tv"
            priceAdds={69}
            priceNoAdds={99}
            add={[{ addTitle: titleForadd, addTexBold: textForAddBold, addTextNormal: textForAddNormal, addLogo: "skyshowtime" }]}
            included={[
              { text: "TV 2s on demand-programmer med nyt indhold og snigpremierer hver dag" },
              { text: "Fem af TV 2s livekanaler", logo: ["tv2", "tv2news", "tv2charlie", "tv2echo", "tv2fri"] },
              { text: "Nyhed! Nu endnu mere indhold.Se mere", logo: ["cmore", "sfkids", "britbox"] },
            ]}
            mostPopular={true}
          />
        </div>
        <div>
          <Tv2_plan
            heading="Favorit + Sport"
            usp="Se al sport + live-tv"
            priceAdds={69}
            priceNoAdds={99}
            add={[{ addTitle: titleForadd, addTexBold: textForAddBold, addTextNormal: textForAddNormal, addLogo: "skyshowtime" }]}
            included={[
              { text: "TV 2s on demand-programmer med nyt indhold og snigpremierer hver dag" },
              {
                text: "Fem af TV 2s livekanaler",
                logo: ["tv2", "tv2news", "tv2charlie", "tv2echo", "tv2fri", "tv2sport", "tv2sportplus"],
              },
              { text: "Sport on demand inkl. højdepunkter, studier og dokumentarer" },
              { text: "Nyhed! Nu endnu mere indhold.Se mere", logo: ["cmore", "sfkids", "britbox"] },
            ]}
            mostPopular={false}
          />
        </div>
      </section>
    </>
  );
};
