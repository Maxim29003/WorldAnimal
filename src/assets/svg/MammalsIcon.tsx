import { Colors } from '@styles/colors';
import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';


type Props = SvgProps & {
  stroke?: string;
};

const MammalsIcon = ({ stroke = Colors.Gray600, ...props }: Props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.996 15.995a2.999 2.999 0 0 1 2.24 4.998m2.758-8.997h.01"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.994 20.993H9.997a4 4 0 0 1-3.999-3.999 7 7 0 0 1 6.998-6.997h.2l-3.6-3.6a1.98 1.98 0 1 1 2.8-2.798l3.399 3.399h.2c3.299 0 5.998 2.699 5.998 5.998v1a2 2 0 0 1-2 1.999h-1a3 3 0 0 0-2.998 2.999"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.994 8.537V4a2 2 0 0 0-4 0v2.999M7.61 12.52a3 3 0 1 0-1.6 4.299"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default MammalsIcon;
