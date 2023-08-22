import { Tv2_button } from "./Tv2_button";

interface Tv2_headerProps {
  bgColor: "bg-bg_col";
}
export const Tv2_header = ({ bgColor = "bg-bg_col" }: Tv2_headerProps) => {
  return (
    <>
      <header className={`${bgColor} w-screen p-3 md:p-8 lg:p-16 `}>
        <div className="flex justify-between ">
          <div>
            <h1 className="text-white text-center">
              <img
                className=" max-h-12"
                src="./public/playlogo.jpg"
                alt="tv2 logo"
              />
            </h1>
          </div>
          <div className="flex between gap-2">
            <Tv2_button
              btnType="primary"
              size="small"
              label="Log ind"
            />
            <Tv2_button
              btnType="secondary"
              size="small"
              label="Prøv nu"
            />
          </div>
        </div>
      </header>
    </>
  );
};
