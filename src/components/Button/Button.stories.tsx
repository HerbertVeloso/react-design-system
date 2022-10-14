import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./index";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Click on the button",
  },
} as Meta<ButtonProps>;

export const Default: StoryObj = {};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <a href="#">Button with A tag</a>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
