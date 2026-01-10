import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { Colors } from '@styles/colors';

type Props = SvgProps & {
  stroke?: string;
};

const FishIcon = ({ stroke = Colors.Gray600, ...props }: Props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M6.498 11.996c.94-3.459 4.938-5.998 8.497-5.998s6.058 2.54 6.998 5.998c-.94 3.469-3.44 5.998-6.998 5.998s-7.557-2.529-8.497-5.998m11.496 0v.5"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.995 17.924a9.766 9.766 0 0 1 0-11.856m-8.997 4.599c0-2.67-1.42-4.699-4.269-5.169-1 1.5-1 4.999.23 6.498-1.24 1.5-1.24 4.998-.23 6.498 2.85-.47 4.269-2.5 4.269-5.168"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.457 7.258c-.26-1.38-1.29-3.02-2.46-4.259h5.798a2 2 0 0 1 1.98 1.67l.23 1.399m0 11.856-.23 1.4a2 2 0 0 1-1.98 1.67H9.497a5.96 5.96 0 0 0 1.49-3.98"
      stroke={stroke}
      strokeWidth={1.999}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default FishIcon;
