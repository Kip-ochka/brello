import type { FunctionComponent, SVGProps } from "react";

export interface Props {
  className?: string;
  color?: "primary" | "error";
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}
