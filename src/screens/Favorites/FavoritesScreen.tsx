import { useAnimalCardRenderer } from '@hooks/useAnimalCardRenderer';
import MainLayout from '@layouts/MainLayout/MainLayout';
import { animalsData } from '@mocks/animalsData';
import { useFavoritesStore } from '@store/useFavoritesStore';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import UIText from '@ui/UIText/UIText';
import { useMemo } from 'react';
import { FlatGrid } from 'react-native-super-grid';

function FavoritesScreen() {
  const favorites = useFavoritesStore(s => s.favorites);
  const renderItem = useAnimalCardRenderer(Colors.FavoriteLight);

  const favoriteAnimals = useMemo(() => {
    return animalsData.filter(a => favorites.includes(a.id));
  }, [favorites]);

  return (
    <MainLayout>
      <Spacer vertical={20} />
      <FlatGrid
        itemDimension={330}
        showsVerticalScrollIndicator={false}
        data={favoriteAnimals}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <UIText variant="sectionTitle" color={Colors.TextSecondary}>
            Вы ещё не добавили животных в избранное
          </UIText>
        }
      />
    </MainLayout>
  );
}

export default FavoritesScreen;
