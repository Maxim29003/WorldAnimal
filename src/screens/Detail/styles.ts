import { StyleSheet } from 'react-native';
import { borderRadius } from '@styles/borderRadius';

export const styles = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    borderRadius: borderRadius.large,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  sectionTitle: {
    textAlign: 'left',
  },
  factsContainer: {
    padding: 24,
    borderRadius: borderRadius.large,
  },
  factRow: {
    alignItems: 'center',
  },
});
