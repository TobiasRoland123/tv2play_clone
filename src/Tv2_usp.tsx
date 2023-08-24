export interface UspProps {
  heading?: string;
  description: string;
  iconName: string;
  iconAlt: string;
}

export const Tv2_usp = ({
  heading = "7 dage til 0 kr.",
  description = "Få 7 dages TV 2 Play til 0 kr.  ved køb af Basispakken",
  iconName = "",
  iconAlt = "",
}: UspProps) => {
  return (
    <>
      <article className="text-center  flex flex-col pt-6 mt-4">
        <figure className="flex justify-center">
          <img
            className=" w-12 "
            src={`./public/usp/${iconName}.svg`}
            alt={iconAlt}
          />
        </figure>

        <h2 className="text-xl my-2">{heading}</h2>
        {/* <p className=" max-w- text-sm">{description}</p> */}
        {/* <p className=" max-w- text-sm">{description}</p> */}
        <p
          className=" max-w- text-sm"
          dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br>") }}
        />
      </article>
    </>
  );
};
