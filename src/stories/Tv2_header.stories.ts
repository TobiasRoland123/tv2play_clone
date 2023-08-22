import type { Meta, StoryObj } from "@storybook/react";

import { Tv2_header } from "../Tv2_header";

const meta = {
  title: "Tv2_Header",
  component: Tv2_header,
  parameters: { layout: "centered" },

  tags: ["autodocs"],
} satisfies Meta<typeof Tv2_header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = { args: { bgColor: "bg-bg_col" } };
