import { useState } from "react";

import { Skeleton } from "../Skeleton";

import type { ImageProps } from "./Image.types";

export function Image({
  imageSrc,
  fallbackSrc,
  alt,
  width,
  height,
  borderRadius,
  className,
}: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [src, setSrc] = useState(imageSrc);
  return (
    <div style={{ position: "relative", width, height }}>
      {!isLoaded && <Skeleton width={width} height={height} style={{ position: "absolute" }} />}
      <img
        src={src}
        alt={alt}
        className={className}
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.3s",
          borderRadius: typeof borderRadius === "number" ? `${borderRadius}px` : borderRadius,
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (fallbackSrc && src !== fallbackSrc) {
            setSrc(fallbackSrc);
          }
        }}
      />
    </div>
  );
}
