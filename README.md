# WorldAnimal

Мобильное приложение-справочник о животных. Категории вынесены во вкладки, карточки показываются сеткой, есть экран деталей и список избранного с сохранением между запусками.

## Основные возможности

- Категории: млекопитающие, птицы, рыбы, рептилии, насекомые
- Карточки животных в сетке
- Экран деталей с характеристиками
- Избранное с локальным хранением
- Кастомные SVG-иконки и стили
- BootSplash при запуске, ErrorBoundary для перехвата ошибок

## Используемые библиотеки

- React Native и React
- React Navigation (`@react-navigation/native`, `native-stack`, `bottom-tabs`)
- Zustand для состояния избранного
- `react-native-mmkv` для локального хранения
- `react-native-super-grid` для сетки карточек
- `react-native-svg` для иконок
- `react-native-safe-area-context`, `react-native-screens`


## Установка

```sh
npm install
```

## Запуск

### Metro

```sh
npm start
```

### Android

```sh
npm run android
```

### iOS

Первый запуск или после обновления нативных зависимостей:

```sh
bundle install
cd ios
bundle exec pod install
cd ..
```

Запуск приложения:

```sh
npm run ios
```
