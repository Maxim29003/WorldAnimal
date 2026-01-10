import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from './navigations.types';
import Tabs from './Tabs';
import DetailScreen from '@screens/Detail/DetailScreen';
import FavoritesScreen from '@screens/Favorites/FavoritesScreen';
import Header from '@layouts/Header/Header';
import { Colors } from '@styles/colors';

export const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={SCREENS.TABS}
    >
      <Stack.Screen
        name={SCREENS.TABS}
        component={Tabs}
        options={{
          headerShown: true,
          header: ({ options }) => (
            <Header
              variant="primary"
              title={options.title as string}
              color={options.headerTintColor as string}
            />
          ),
        }}
      />
      <Stack.Screen
        name={SCREENS.DETAIL}
        component={DetailScreen}
        options={{
          headerShown: true,
          header: ({ options }) => (
            <Header
              variant="secondary"
              title={options.title as string}
              color={Colors.TextPrimary}
            />
          ),
        }}
      />

      <Stack.Screen
        name={SCREENS.FAVORITES}
        component={FavoritesScreen}
        options={{
          headerShown: true,
          header: () => (
            <Header variant='secondary' title="Избраное" color={Colors.Favorite} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
