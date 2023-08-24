import type { Meta, StoryObj } from "@storybook/react";
import { Tv2_plan } from "../Tv2_plan";

const meta = {
  title: "Tv2_Plan",
  component: Tv2_plan,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_plan>;

export default meta;
type Story = StoryObj<typeof meta>;

const titleForadd = "SkyShowTime";
const textForAddBold = "Prøv SkyShowtime gratis i 14 dage";
const textForAddNormal = "Herefter 60 kr./md. Ingen binding";

export const Basis: Story = {
  args: {
    heading: "Basis",
    usp: "Prøv gratis i 7 dage",
    priceAdds: 69,
    priceNoAdds: 99,
    add: [{ addTitle: titleForadd, addTexBold: textForAddBold, addTextNormal: textForAddNormal, addLogo: "skyshowtime" }],
    included: [
      { text: "TV 2s on demand-programmer med nyt indhold og snigpremierer hver dag" },
      { text: "Nyhed! Nu endnu mere indhold.Se mere", logo: ["cmore", "sfkids"] },
    ],
    mostPopular: false,
  },
};
export const Favorit: Story = {
  args: {
    heading: "Favorit",
    usp: "Se live-tv",
    priceAdds: 129,
    priceNoAdds: 159,
    add: [{ addTitle: titleForadd, addTexBold: textForAddBold, addTextNormal: textForAddNormal, addLogo: "skyshowtime" }],
    included: [
      { text: "TV 2s on demand-programmer med nyt indhold og snigpremierer hver dag" },
      { text: "Fem af TV 2s livekanaler", logo: ["tv2", "tv2news", "tv2charlie", "tv2echo", "tv2fri"] },
      { text: "Nyhed! Nu endnu mere indhold.Se mere", logo: ["cmore", "sfkids", "britbox"] },
    ],
    mostPopular: true,
  },
};

export const FavoritPlusSport: Story = {
  args: {
    heading: "Favorit + Sport",
    usp: "Se al sport + live-tv",
    priceAdds: 189,
    priceNoAdds: 219,
    add: [{ addTitle: titleForadd, addTexBold: textForAddBold, addTextNormal: textForAddNormal, addLogo: "skyshowtime" }],
    included: [
      { text: "TV 2s on demand-programmer med nyt indhold og snigpremierer hver dag" },
      {
        text: "Fem af TV 2s livekanaler",
        logo: ["tv2", "tv2news", "tv2charlie", "tv2echo", "tv2fri", "tv2sport", "tv2sportplus"],
      },
      { text: "Sport on demand inkl. højdepunkter, studier og dokumentarer" },
      { text: "Nyhed! Nu endnu mere indhold.Se mere", logo: ["cmore", "sfkids", "britbox"] },
    ],
    mostPopular: false,
  },
};
