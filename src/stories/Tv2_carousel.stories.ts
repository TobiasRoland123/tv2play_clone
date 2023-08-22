import type { Meta, StoryObj } from "@storybook/react";
import { Tv2_carousel } from "../Tv2_carousel";

const meta = {
  title: "Tv2_Carousel",
  component: Tv2_carousel,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SplashSlider: Story = {
  args: {},
};
