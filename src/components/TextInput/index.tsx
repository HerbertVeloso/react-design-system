import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface TextInputRootProps {
  children: ReactNode;
  isInvalid?: boolean;
}

function TextInputRoot({ children, isInvalid }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "bg-cyan-100 rounded px-4 py-3 w-full h-12 focus-within:ring-2 focus-within:ring-cyan-800 flex gap-2 items-center text-cyan-800",
        {
          "ring-2 ring-red focus-within:ring-red text-red": isInvalid === true,
        }
      )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6">{children}</Slot>;
}

TextInputIcon.displayName = "TextInput.Icon";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputProps) {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 font-sans text-sm outline-none placeholder:text-gray-400",
        {
          // "text-red": props.isInvalid === true,
        }
      )}
      {...props}
    />
  );
}

TextInputInput.displayName = "TextInput.Input";

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
};
