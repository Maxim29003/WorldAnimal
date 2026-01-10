import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { Colors } from '@styles/colors';
import { borderRadius } from '@styles/borderRadius';

type UIButtonIconProps = {
  icon: React.ReactNode;
  outline?: boolean;
  onPress?: () => void;
};

const UIButtonIcon = ({ icon, outline, onPress }: UIButtonIconProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: outline ? Colors.WhiteAlpha90 : 'transparent',
        width: 40,
        height: 40,
        borderRadius: borderRadius.full,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {icon}
    </TouchableOpacity>
  );
};

export default UIButtonIcon;


