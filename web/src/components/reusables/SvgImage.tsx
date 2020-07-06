import React, { CSSProperties, FC } from "react";

interface SVGImageProps {
  id: string | number;
  image: string;
  style?: CSSProperties;
}

export const SvgImage: FC<SVGImageProps> = ({ id, image, style }) => {
  return (
    <svg version={"1.1"} style={style}>
      <defs>
        <pattern
          id={`${id}-image`}
          patternUnits={"objectBoundingBox"}
          width={"100%"}
          height={"100%"}
        >
          <image
            xlinkHref={image}
            width={"100%"}
            height={"100%"}
            preserveAspectRatio={"xMidYMid slice"}
          />
        </pattern>
      </defs>

      <rect
        fill={`url(#${id}-image)`}
        x={"0%"}
        y={"0%"}
        width={"100%"}
        height={"100%"}
      />
    </svg>
  );
};
