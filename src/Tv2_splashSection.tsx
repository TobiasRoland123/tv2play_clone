import { Tv2_button } from "./Tv2_button";
import { Tv2_carousel } from "./Tv2_carousel";

export const Tv2_splashSection = () => {
  return (
    <>
      <main>
        <Tv2_carousel />

        <div className="flex justify-center mt-9">
          <Tv2_button
            btnType="secondary"
            label="Prøv basis i 7 dage gratis*"
            size="large"
          />
        </div>
      </main>
    </>
  );
};
