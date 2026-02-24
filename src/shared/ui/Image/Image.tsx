import { useState } from "react";

import { Skeleton } from "../Skeleton";

import type { ImageProps } from "./Image.types";

export function Image({ imageSrc, alt, width, height, borderRadius, className }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width, height }}>
      {!isLoaded && <Skeleton width={width} height={height} style={{ position: "absolute" }} />}

      <img
        src={imageSrc}
        alt={alt}
        className={className}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s",
          borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
