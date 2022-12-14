import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./index";

import { Text } from "../Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Aceito os termos.</Text>
        </div>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
