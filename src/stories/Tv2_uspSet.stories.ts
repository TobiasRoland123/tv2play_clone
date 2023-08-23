import type { Meta, StoryObj } from "@storybook/react";
import { Tv2_uspSet } from "../Tv2_uspSet";

const meta = {
  title: "Tv2_UspSet",
  component: Tv2_uspSet,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_uspSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Three: Story = {
  args: {},
};
