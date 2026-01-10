import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const LocationIcon = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Path
      d="M16.663 8.331c0 4.16-4.615 8.493-6.165 9.83a.83.83 0 0 1-1.001 0c-1.55-1.338-6.164-5.67-6.164-9.83a6.665 6.665 0 1 1 13.33 0"
      stroke="#155dfc"
      strokeWidth={1.666}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.998 10.83a2.5 2.5 0 1 0 0-4.998 2.5 2.5 0 0 0 0 4.999"
      stroke="#155dfc"
      strokeWidth={1.666}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LocationIcon;
