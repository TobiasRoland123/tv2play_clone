import type { Meta, StoryObj } from "@storybook/react";
import { Tv2_planSet } from "../tv2_planSet";

const meta = {
  title: "Tv2_PlanSet",
  component: Tv2_planSet,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_planSet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Three: Story = {
  args: {},
};
