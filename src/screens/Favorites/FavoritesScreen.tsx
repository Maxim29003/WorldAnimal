import MainLayout from '@layouts/MainLayout/MainLayout';
import { animalsData } from '@mocks/animalsData';
import { useFavoritesStore } from '@store/useFavoritesStore';
import { Colors } from '@styles/colors';
import AnimalCard from '@ui/AnimalCard/AnimalCard';
import { Spacer } from '@ui/Spacer/Spacer';
import { useMemo } from 'react';
import { FlatGrid } from 'react-native-super-grid';

function FavoritesScreen() {
  const favorites = useFavoritesStore(s => s.favorites);

  const favoriteAnimals = useMemo(()=>{
    return animalsData.filter(a=>favorites.includes(a.id))
  }, [favorites])

  return (
    <MainLayout>
      <Spacer vertical={20} />
      <FlatGrid
        itemDimension={330}
        showsVerticalScrollIndicator={false}
        data={favoriteAnimals}
        renderItem={({ item }) => (
          <AnimalCard animal={item} color={Colors.FavoriteLight} />
        )}
      />
    </MainLayout>
  );
}

export default FavoritesScreen;
