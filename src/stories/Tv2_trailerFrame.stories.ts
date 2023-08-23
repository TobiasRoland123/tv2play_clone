import type { Meta, StoryObj } from "@storybook/react";
import { Tv2_trailerFrame } from "../Tv1_trailerFrame";

const meta = {
  title: "Tv2_TrailerFrame",
  component: Tv2_trailerFrame,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_trailerFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Agent: Story = {
  args: { src: "https://www.youtube.com/embed/dDK_u-lx1c0" },
};
