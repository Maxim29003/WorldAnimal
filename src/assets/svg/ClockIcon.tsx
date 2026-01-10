import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";
const ClockIcon = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#9810fa"
      strokeWidth={1.666}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M9.998 4.999v4.999l3.332 1.666" />
      <Path d="M9.998 18.329a8.331 8.331 0 1 0 0-16.663 8.331 8.331 0 0 0 0 16.663" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19.995v19.995H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ClockIcon;
