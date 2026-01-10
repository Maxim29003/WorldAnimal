import MainLayout from '@layouts/MainLayout/MainLayout';
import { animalsData } from '@mocks/animalsData';
import { Colors } from '@styles/colors';
import AnimalCard from '@ui/AnimalCard/AnimalCard';
import { Spacer } from '@ui/Spacer/Spacer';
import { useMemo } from 'react';
import { FlatGrid } from 'react-native-super-grid';

function FishScreen() {
  const fish = useMemo(
    () => animalsData.filter(animal => animal.category === 'fish'),
    [],
  );
  return (
    <MainLayout>
      <Spacer vertical={20} />
      <FlatGrid
        itemDimension={330}
        showsVerticalScrollIndicator={false}
        data={fish}
        renderItem={({ item }) => (
          <AnimalCard animal={item} color={Colors.FishLight} />
        )}
      />
    </MainLayout>
  );
}

export default FishScreen;
