import { Animal } from '@appTypes/AnimalType';
import { Colors } from '@styles/colors';

export enum SCREENS {
  TABS = 'TABS',
  DETAIL = 'DETAIL',
  FAVORITES = 'FAVORITES',
  BIRDS = 'BIRDS',
  FISH = 'FISH',
  REPTILES = 'REPTILES',
  INSECTS = 'INSECTS',
  MAMMALS = 'MAMMALS',
}

export type RootStackParamList = {
  [SCREENS.TABS]: undefined;
  [SCREENS.DETAIL]: { animal: Animal; color: Colors };
  [SCREENS.FAVORITES]: undefined;
  [SCREENS.BIRDS]: undefined;
  [SCREENS.FISH]: undefined;
  [SCREENS.REPTILES]: undefined;
  [SCREENS.INSECTS]: undefined;
  [SCREENS.MAMMALS]: undefined;
};
