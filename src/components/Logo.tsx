import { SVGAttributes } from "react";

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={60}
      height={94}
      viewBox="0 0 60 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M54.077 88V53.952s-4.465-29.532-35.164-17.81"
        stroke="#2DD4BF"
        strokeWidth={10.1485}
        strokeLinecap="round"
      />
      <path
        d="M5.923 6v66.93s0 13.954 13.903 13.192"
        stroke="#155E75"
        strokeWidth={10.1485}
        strokeLinecap="round"
      />
    </svg>
  );
}
