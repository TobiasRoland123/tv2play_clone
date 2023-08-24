import type { Meta, StoryObj } from "@storybook/react";
import { Tv2_collapsible } from "../Tv2_collapsible";

const meta = {
  title: "Tv2_Collapsible",
  component: Tv2_collapsible,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    text: "Du har også mulighed for at købe en eller to livekanaler med binding",
  },
};
