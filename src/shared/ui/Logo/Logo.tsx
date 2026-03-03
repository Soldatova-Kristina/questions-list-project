// Logo.tsx
import { Link } from "react-router-dom";

import footerLogo from "@/shared/assets/icons/logo_footer.svg";
import headerLogo from "@/shared/assets/icons/logo_header.svg";

import type { LogoProps } from "./Logo.types";

export function Logo({ className, variant = "header" }: LogoProps) {
  const logoSrc = variant === "footer" ? footerLogo : headerLogo;

  return (
    <Link to="/" className={className}>
      <img src={logoSrc} alt="yeahub-logotype" />
    </Link>
  );
}
