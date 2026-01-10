import { createMMKV } from 'react-native-mmkv'

export const storage = createMMKV()

const KEY = 'favorites';

export const loadFavorites = (): string[] => {
  const value = storage.getString(KEY);
  return value ? JSON.parse(value) : [];
};

export const saveFavorites = (favorites: string[]) => {
  storage.set(KEY, JSON.stringify(favorites));
};