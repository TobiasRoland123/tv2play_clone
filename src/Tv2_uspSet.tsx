import { Tv2_usp, UspProps } from "./Tv2_usp";

interface Tv2_uspSetProps {
  set: Array<{ usp0: Array<UspProps>; usp1: Array<UspProps>; usp2: Array<UspProps>; usp3?: Array<UspProps> }>;
}

export const Tv2_uspSet = ({
  set = [
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
  ],
}: Tv2_uspSetProps) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around w-screen">
        {set.map((uspItem, index) => {
          return (
            <>
              <div key={index}>
                {uspItem.usp0.map((item) => {
                  return (
                    <>
                      <Tv2_usp
                        heading={item.heading}
                        description={item.description}
                        iconAlt={item.iconAlt}
                        iconName={item.iconName}
                      />
                    </>
                  );
                })}
              </div>
              <div key={index}>
                {uspItem.usp1.map((item) => {
                  return (
                    <>
                      <Tv2_usp
                        heading={item.heading}
                        description={item.description}
                        iconAlt={item.iconAlt}
                        iconName={item.iconName}
                      />
                    </>
                  );
                })}
              </div>
              <div key={index}>
                {uspItem.usp2.map((item) => {
                  return (
                    <>
                      <Tv2_usp
                        heading={item.heading}
                        description={item.description}
                        iconAlt={item.iconAlt}
                        iconName={item.iconName}
                      />
                    </>
                  );
                })}
              </div>

              {uspItem.usp3 ? (
                <div key={index}>
                  {uspItem.usp3.map((item) => {
                    return (
                      <>
                        <Tv2_usp
                          heading={item.heading}
                          description={item.description}
                          iconAlt={item.iconAlt}
                          iconName={item.iconName}
                        />
                      </>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
