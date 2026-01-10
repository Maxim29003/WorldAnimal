// store/useFavoritesStore.ts
import { loadFavorites, saveFavorites } from '@utils/MMKVStorage';
import { create } from 'zustand';

type FavoritesState = {
  favorites: string[];
  toggleLike: (id: string) => void;
  isLiked: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: loadFavorites(),

  toggleLike: (id) =>
    set((state) => {
      const updated = state.favorites.includes(id)
        ? state.favorites.filter(f => f !== id)
        : [...state.favorites, id];

      saveFavorites(updated);
      return { favorites: updated };
    }),

  isLiked: (id) => get().favorites.includes(id),
}));
