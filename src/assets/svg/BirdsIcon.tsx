import { Colors } from '@styles/colors';
import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = SvgProps & {
  stroke?: string;
};

const BirdsIcon = ({ stroke = Colors.Gray600, ...props }: Props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M15.995 6.998h.01M3.399 17.994h8.597a7.997 7.997 0 0 0 7.997-7.997v-3A3.999 3.999 0 0 0 12.716 4.7L1.999 19.994"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m19.993 6.998 2 .5-2 .5m-9.996 9.996v3m3.998-3.25v3.25m-6.997-3a5.997 5.997 0 0 0 3.838-10.606"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BirdsIcon;
