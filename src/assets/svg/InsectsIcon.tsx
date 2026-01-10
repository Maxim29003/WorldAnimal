import { Colors } from "@styles/colors";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

type Props = SvgProps & {
  stroke?: string;
};

const InsectsIcon = ({ stroke = Colors.Gray600, ...props }: Props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M11.996 19.993v-8.997m1.999-3.998a4 4 0 0 1 4 3.998v3a5.998 5.998 0 1 1-11.997 0v-3a4 4 0 0 1 3.999-3.998zm.121-3.118L15.996 2"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.993 20.993a4 4 0 0 0-3.809-3.999m3.809-11.996a4 4 0 0 1-3.549 3.969m4.549 4.029h-3.999M2.999 20.993a4 4 0 0 1 3.809-3.999M2.999 4.998a4 4 0 0 0 3.549 3.969m-.55 4.029H1.999M7.997 2l1.88 1.88m-.88 3.248v-1.13a2.999 2.999 0 0 1 5.998 0v1.13"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default InsectsIcon;
