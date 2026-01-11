import { StyleSheet } from 'react-native';
import { Colors } from '@styles/colors';
import { borderRadius } from '@styles/borderRadius';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.WhiteAlpha90,
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
