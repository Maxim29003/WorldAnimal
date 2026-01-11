import { useAnimalCardRenderer } from '@hooks/useAnimalCardRenderer';
import MainLayout from '@layouts/MainLayout/MainLayout';
import { animalsData } from '@mocks/animalsData';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import { useMemo } from 'react';
import { FlatGrid } from 'react-native-super-grid';

function FishScreen() {
  const fish = useMemo(
    () => animalsData.filter(animal => animal.category === 'fish'),
    [],
  );

  const renderItem = useAnimalCardRenderer(Colors.FishLight);
  return (
    <MainLayout>
      <Spacer vertical={20} />
      <FlatGrid
        itemDimension={330}
        showsVerticalScrollIndicator={false}
        data={fish}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </MainLayout>
  );
}

export default FishScreen;
