import { StyleProp, Text, TextStyle } from 'react-native';
import React, { memo, useMemo } from 'react';
import { FontSize, Typography } from '@styles/typography';
import { Colors } from '@styles/colors';

type UITextProps = {
  variant?: FontSize;
  color?: Colors | string;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

const UIText = ({
  variant = 'headerTitle',
  color = Colors.TextPrimary,
  style,
  children,
}: UITextProps) => {
  const colorStyle = useMemo(() => ({ color }), [color]);
  return (
    <Text style={[Typography[variant], colorStyle, style]}>{children}</Text>
  );
};

export default memo(UIText);
