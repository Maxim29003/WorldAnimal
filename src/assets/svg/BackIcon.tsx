import { Colors } from "@styles/colors";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

type Props = SvgProps & {
  stroke?: string;
};

const SVGComponent = ({ stroke = Colors.Gray800, ...props }: Props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="m12 19-7-7 7-7m7 7H5"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
