import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./index";

export default {
  title: "Components/Text",
  component: Text,
  args: {
    children: "Lorem ipsum dolor sis amet",
    size: "md",
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: "inline-radio",
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj = {};

export const ExtraSmall: StoryObj<TextProps> = {
  args: {
    size: "xs",
  },
};

export const Small: StoryObj<TextProps> = {
  args: {
    size: "sm",
  },
};

export const Large: StoryObj<TextProps> = {
  args: {
    size: "lg",
  },
};

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with P tag</p>,
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
