import { Colors } from '@styles/colors';
import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = SvgProps & {
  stroke?: string;
};

const ReptilesIcon = ({ stroke = Colors.Gray600, ...props }: Props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="m11.996 9.997 2 3.998v3a1 1 0 0 0 .999 1h2a1 1 0 0 0 .999-1v-3a7.997 7.997 0 1 0-15.995 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 .999-1v-3l2-3.998zm-7.178-2.1 3.18 2.1m7.177-2.1-3.179 2.1"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.924 9.997h3.07a2 2 0 0 1 0 3.999H1.998"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ReptilesIcon;
