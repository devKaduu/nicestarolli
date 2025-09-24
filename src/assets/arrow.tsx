import type { SVGProps } from "react";

type ArrowIconProps = SVGProps<SVGSVGElement>;

export const ArrowIcon: React.FC<ArrowIconProps> = (props) => {
  return (
    <svg
      className="rotate-90 ml-2"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      {...props}
    >
      <path
        d="M1.81213 19.1203L19.4395 1.43779M5.76584 1.24781L19.6484 1.2279L19.6922 15.1104"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#101010"
        fill="none"
      />
    </svg>
  );
};
