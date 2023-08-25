import type { Meta, StoryObj } from "@storybook/react";
import { Tv2_sportSlider } from "../Tv2_sportSlider";
const meta = {
  title: "Tv2_SportSlider",
  component: Tv2_sportSlider,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_sportSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tv2_SportSlider: Story = {
  args: {},
};
