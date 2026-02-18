import { Link } from "react-router-dom";

import logoImage from "@/shared/assets/icons/logo.svg";

import type { LogoProps } from "./Logo.types";

export function Logo({ className }: LogoProps) {
  return (
    <Link to="/" className={className}>
      <img src={logoImage} alt="yehub-logotype" />
    </Link>
  );
}
