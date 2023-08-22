import type { Meta, StoryObj } from "@storybook/react";

import { Tv2_splashSection } from "../Tv2_splashSection";

const meta = {
  title: "Tv2_SplashSection",
  component: Tv2_splashSection,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_splashSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
