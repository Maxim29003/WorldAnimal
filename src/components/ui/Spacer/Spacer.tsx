import React from 'react';
import { View } from 'react-native';

type SpacerProps = {
  vertical?: number;
  horizontal?: number;
};

export const Spacer = ({ vertical, horizontal }: SpacerProps) => {
  return <View style={{ width: horizontal, height: vertical }} />;
};
