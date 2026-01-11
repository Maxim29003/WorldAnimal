import { useAnimalCardRenderer } from '@hooks/useAnimalCardRenderer';
import MainLayout from '@layouts/MainLayout/MainLayout';
import { animalsData } from '@mocks/animalsData';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import { useMemo } from 'react';
import { FlatGrid } from 'react-native-super-grid';

function ReptilesScreen() {
  const reptiles = useMemo(
    () => animalsData.filter(animal => animal.category === 'reptiles'),
    [],
  );

  const renderItem = useAnimalCardRenderer(Colors.ReptilesLight);
  return (
    <MainLayout>
      <Spacer vertical={20} />
      <FlatGrid
        itemDimension={330}
        showsVerticalScrollIndicator={false}
        data={reptiles}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </MainLayout>
  );
}

export default ReptilesScreen;
