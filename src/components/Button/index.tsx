import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface ButtonProps {
  children: ReactNode;
  asChild: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "bg-teal-300 hover:bg-teal-400 font-bold font-sans text-black text-md px-4 py-3 rounded focus:ring-1 focus:ring-white w-full block text-center"
      )}
    >
      {children}
    </Comp>
  );
}
