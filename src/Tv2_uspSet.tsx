import { Tv2_usp, UspProps } from "./Tv2_usp";

// interface Tv2_uspSetProps{
//     usp:UspProps[];

//     }

const uspSet = [
  {
    heading: "7 dage til 0 kr.",
    description: "Få 7 dages TV 2 Play til 0 kr. \n ved køb af Basispakken",
    iconName: "gift",
    iconAlt: "gift icon",
  },
  {
    heading: "Ingen binding",
    description: "Med TV 2 Play er der ingen \n binding eller skjulte gebyrer",

    iconName: "lock",
    iconAlt: "lock icon",
  },
  {
    heading: "Det bedste - samlet ét sted",
    description: "Kun med TV 2 Play får du de største film og \n serier samt det bedste fra TV 2s kanaler",
    iconName: "diamond",
    iconAlt: "diamond icon",
  },
];

export const Tv2_uspSet = () => {
  return (
    <>
      <section>
        {uspSet.map((usp) => {
          return (
            <>
              <Tv2_usp
                heading={usp.heading}
                description={usp.description}
                iconAlt={usp.iconAlt}
                iconName={usp.iconName}
              />
            </>
          );
        })}
      </section>
    </>
  );
};
