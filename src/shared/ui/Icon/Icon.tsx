import type { IconProps } from "./Icon.types";

export function Icon({ name, size, ...props }: IconProps) {
  const iconPath = `/src/shared/assets/icons/${name}.svg`;

  return <img src={iconPath} alt="" style={{ width: size, height: size }} {...props} />;
}
