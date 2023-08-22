import type { Meta, StoryObj } from "@storybook/react";

import { Tv2_button } from "../Tv2_button";

const meta = {
  title: "Tv2_Button",
  component: Tv2_button,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { btnType: "primary", size: "small", label: "Log in" },
};
export const Secondary: Story = {
  args: { btnType: "secondary", size: "small", label: "Log in" },
};
export const LightGray: Story = {
  args: { btnType: "lightGray", size: "small", label: "Log in" },
};

export const Medium: Story = {
  args: { btnType: "primary", size: "medium", label: "Log in" },
};

export const Large: Story = {
  args: { btnType: "primary", size: "large", label: "Log in" },
};
