import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className="h-6 w-6 rounded p-[2px] bg-cyan-100"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-800" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
