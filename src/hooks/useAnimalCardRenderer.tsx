import { Animal } from '@appTypes/AnimalType';
import { useCallback } from 'react';
import AnimalCard from '@components/AnimalCard/AnimalCard';
import { Colors } from '@styles/colors';

export const useAnimalCardRenderer = (color: Colors) => {
  return useCallback(
    ({ item }: { item: Animal }) => {
      return <AnimalCard animal={item} color={color} />;
    },
    [color],
  );
};
