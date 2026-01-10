import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, SvgProps } from "react-native-svg";
const WeightIcon = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#e60076"
      strokeWidth={1.666}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M9.998 6.665a2.5 2.5 0 1 0 0-4.999 2.5 2.5 0 0 0 0 5" />
      <Path d="M5.415 6.665a1.67 1.67 0 0 0-1.587 1.216L1.75 15.413a1.666 1.666 0 0 0 1.583 2.083h13.33a1.666 1.666 0 0 0 1.604-2.116l-2.104-7.465a1.666 1.666 0 0 0-1.6-1.25z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h19.995v19.995H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default WeightIcon;
