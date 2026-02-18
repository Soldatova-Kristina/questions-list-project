import type { NavLinkProps } from "react-router-dom";

export interface LinkProps extends Omit<NavLinkProps, "className"> {
  className?: string;
}
