import { Dimensions } from 'react-native';

const Window = Dimensions.get('window');
const Screen = Dimensions.get('screen');
const WIDTH = Window.width;
const HEIGHT = Window.height;

const isTablet = WIDTH >= 768;




const MainLayoutWidth = WIDTH - 48;


export {
  Window,
  WIDTH,
  HEIGHT,
  Screen,
  isTablet
};