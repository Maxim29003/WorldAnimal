import { StyleSheet } from 'react-native';

export const Typography = StyleSheet.create({
// Заголовок категории в хедере
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32,
  },

  // Название животного на карточке
  animalName: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 28,
  },

  // Описание животного
  description: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 28,
  },

  // Заголовки секций
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 28,
  },

  // Метки характеристик
  characteristicLabel: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },

  characteristicValue: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },

});

export type FontSize = keyof typeof Typography;
