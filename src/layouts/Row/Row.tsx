
import React, { useMemo } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type RowProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  gap?: number;
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  wrap?: ViewStyle['flexWrap'];
  flex?: ViewStyle['flex'];
  flexGrow?: ViewStyle['flexGrow'];
  flexShrink?: ViewStyle['flexShrink'];
  flexBasis?: ViewStyle['flexBasis'];
};

const Row = React.forwardRef<View, RowProps>(
  (
    {
      children,
      style,
      gap = 0,
      align,
      justify,
      wrap,
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
    },
    ref,
  ) => {
    const dynamicStyle = useMemo<ViewStyle>(
      () => ({
        gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        flex,
        flexGrow,
        flexShrink,
        flexBasis,
      }),
      [align, flex, flexBasis, flexGrow, flexShrink, gap, justify, wrap],
    );

    const containerStyle = useMemo(
      () => [styles.base, dynamicStyle, style],
      [dynamicStyle, style],
    );

    return (
      <View ref={ref} style={containerStyle}>
        {children}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
  },
});

export default Row;
