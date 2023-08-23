import type { Meta, StoryObj } from "@storybook/react";
import { Tv2_usp } from "../Tv2_usp";

const meta = {
  title: "Tv2_Usp",
  component: Tv2_usp,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_usp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gift: Story = {
  args: {
    heading: "7 dage til 0 kr.",
    description: "Få 7 dages TV 2 Play til 0 kr. \n ved køb af Basispakken",
    iconName: "gift",
    iconAlt: "gift icon",
  },
};

export const Lock: Story = {
  args: {
    heading: "Ingen binding",
    description: "Med TV 2 Play er der ingen \n binding eller skjulte gebyrer",
    iconName: "lock",
    iconAlt: "lock icon",
  },
};
export const Dimond: Story = {
  args: {
    heading: "Det bedste - samlet ét sted",
    description: "Kun med TV 2 Play får du de største film og \n serier samt det bedste fra TV 2s kanaler",
    iconName: "diamond",
    iconAlt: "diamond icon",
  },
};
