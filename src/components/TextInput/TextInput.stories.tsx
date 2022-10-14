import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./index";

import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Teste" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj = {};

// export const CustomComponent: StoryObj<TextInputProps> = {
//   args: {
//     placeholder: "johndoe@gmail.com",
//     type: "email",
//   },
// };

export const Invalid: StoryObj<TextInputRootProps> = {
  args: {
    isInvalid: true,
  },
};
