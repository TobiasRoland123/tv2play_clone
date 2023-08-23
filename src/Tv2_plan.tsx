import { Tv2_button } from "./Tv2_button";
import "./App.css";

interface Tv2_planProps {
  mostPopular?: boolean;
  heading: string;
  usp: string;
  included: Array<{ text: string; logo?: Array<string> }>;
  add: Array<{ addTitle: string; addTexBold: string; addTextNormal: string; addLogo: string }>;
  priceAdds: number;
  priceNoAdds: number;
}

const titleForadd = "SkyShowTime";
const textForAddBold = "Prøv SkyShowtime gratis i 14 dage";
const textForAddNormal = "Herefter 60 kr./md. Ingen binding";

export const Tv2_plan = ({
  heading = "Basis",
  usp = "Prøv gratis i 7 dage",
  priceAdds = 69,
  priceNoAdds = 99,
  add = [{ addTitle: titleForadd, addTexBold: textForAddBold, addTextNormal: textForAddNormal, addLogo: "skyshowtime" }],
  included = [
    { text: "TV 2s on demand-programmer med nyt indhold og snigpremierer hver dag" },
    { text: "Nyhed! Nu endnu mere indhold.Se mere", logo: ["cmore", "sfkids"] },
  ],
  mostPopular = true,
}: Tv2_planProps) => {
  return (
    <>
      <article className="bg-white max-w-md  text-primary">
        <div className="flex items-center">
          {mostPopular === true ? (
            <div className="bg-secondary p-1 w-full">
              <p className="text-center text-sm text-white ">Mest populære</p>
            </div>
          ) : (
            "test"
          )}
        </div>
        <div className=" px-6 text-start py-6">
          <h2 className=" text-3xl leading-5 font-black pb-1 ">{heading}</h2>
          <p className=" text-sm font-medium leading-5 text-secondary lowercase">{usp}</p>
        </div>

        <div>
          <ul className=" px-6 flex flex-col list-none">
            {included.map((item) => {
              return (
                <>
                  <li className="flex items-center py-2 gap-2">
                    <img
                      className="w-4 pt-2"
                      src="./public/check.svg"
                      alt="checkmark"
                    />
                    <div>
                      <p className=" text-sm leading-6 mt-1">{item.text}</p>

                      <div className="flex pt-2 gap-x-3 gap-y-2 flex-wrap">
                        {item.logo
                          ? item.logo.map((logo) => {
                              return (
                                <img
                                  className=" h-5 inline max-w-full"
                                  src={`./public/includes/${logo}.png`}
                                />
                              );
                            })
                          : ""}
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="pt-2 px-2">
          {add.map((item) => {
            return (
              <>
                <article className=" flex justify-between bg-lightGray py-4 px-3 gap-4 ">
                  <div className="flex text-sm leading-5 font-medium items-start cursor-pointer  ">
                    <input
                      className="mr-3 w-5 h-5"
                      type="checkbox"
                    />
                    <div>
                      <p className=" font-bold">{item.addTexBold}</p>
                      <p>{item.addTextNormal}</p>
                    </div>
                  </div>
                  <figure>
                    <img
                      className=" h-5"
                      src={`./public/adds/${item.addLogo}.png`}
                      alt={item.addTitle}
                    />
                  </figure>
                </article>
              </>
            );
          })}
        </div>

        <div className="py-8 px-2 gap-3 justify-center flex">
          <div className="flex flex-col flex-1 items-center gap-2 w-">
            <Tv2_button
              label={`${priceAdds} kr./md.`}
              btnType="lightGray"
              size="medium"
            />
            <p className="text-center text-xs leading-5  ">Med reklamer</p>
          </div>
          <div className="flex flex-col flex-1 items-center gap-2">
            <Tv2_button
              label={`${priceNoAdds} kr./md.`}
              btnType="secondary"
              size="medium"
            />
            <p className="text-center text-xs leading-5  ">Uden reklamer</p>
          </div>
        </div>
      </article>
    </>
  );
};
