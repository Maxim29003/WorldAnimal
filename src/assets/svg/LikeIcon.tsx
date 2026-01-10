import { Colors } from '@styles/colors';
import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

type Props = SvgProps & {
  stroke?: string;
};

const LikeIcon = ({ stroke = Colors.Gray600, ...props }: Props) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M1.666 7.915a4.582 4.582 0 0 1 7.99-3.063.466.466 0 0 0 .682 0 4.574 4.574 0 0 1 7.991 3.063c0 1.908-1.25 3.332-2.5 4.582l-4.575 4.427a1.667 1.667 0 0 1-2.5.015l-4.588-4.442c-1.25-1.25-2.5-2.666-2.5-4.582"
      stroke={stroke}
      strokeWidth={1.666}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LikeIcon;
