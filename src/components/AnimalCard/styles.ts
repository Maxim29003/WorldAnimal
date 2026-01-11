import { StyleSheet } from 'react-native';
import { borderRadius } from '@styles/borderRadius';

export const styles = StyleSheet.create({
  card: {
    borderRadius: borderRadius.large,
    position: 'relative',
  },
  imageWrapper: {
    height: 360,
    borderRadius: borderRadius.large,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    textAlign: 'center',
  },
  likeButton: {
    position: 'absolute',
    zIndex: 10,
    right: 7,
    top: 7,
  },
});
