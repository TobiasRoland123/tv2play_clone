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

export const Basis: Story = {
  args: { mostPopular: true, heading: "Basis", usp: "Prøv gratis i 7 dage" },
};
