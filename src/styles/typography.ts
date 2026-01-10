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

  // Заголовок на экране деталей
  detailTitle: {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 40,
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

  // Факты
  factText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },

  // Текст пустого состояния (когда нет животных)
  emptyStateText: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
  },

  // Эмодзи в пустом состоянии
  emptyStateEmoji: {
    fontSize: 60,
    fontWeight: '400',
    lineHeight: 60,
  },
});

export type FontSize = keyof typeof Typography;
