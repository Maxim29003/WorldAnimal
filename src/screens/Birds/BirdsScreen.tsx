import { useAnimalCardRenderer } from '@hooks/useAnimalCardRenderer';
import MainLayout from '@layouts/MainLayout/MainLayout';
import { animalsData } from '@mocks/animalsData';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import { useMemo } from 'react';
import { FlatGrid } from 'react-native-super-grid';

function BirdsScreen() {
  const birds = useMemo(
    () => animalsData.filter(animal => animal.category === 'birds'),
    [],
  );

  const renderItem = useAnimalCardRenderer(Colors.BirdsLight);
  return (
    <MainLayout>
      <Spacer vertical={20} />
      <FlatGrid
        itemDimension={330}
        showsVerticalScrollIndicator={false}
        data={birds}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </MainLayout>
  );
}

export default BirdsScreen;
