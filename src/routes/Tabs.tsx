import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '@styles/colors';
import { RootStackParamList, SCREENS } from './navigations.types';
import MammalsScreen from '@screens/Mammals/MammalsScreen';
import MammalsIcon from '@assets/svg/MammalsIcon';
import BirdsScreen from '@screens/Birds/BirdsScreen';
import BirdsIcon from '@assets/svg/BirdsIcon';
import FishScreen from '@screens/Fish/FishScreen';
import FishIcon from '@assets/svg/FishIcon';
import ReptilesScreen from '@screens/Reptiles/ReptilesScreen';
import ReptilesIcon from '@assets/svg/ReptilesIcon';
import InsectsScreen from '@screens/Insects/InsectsScreen';
import InsectsIcon from '@assets/svg/InsectsIcon';
import useAppNavigation from '@hooks/useAppNavigation';

type TabParamList = Pick<
  RootStackParamList,
  | SCREENS.MAMMALS
  | SCREENS.BIRDS
  | SCREENS.FISH
  | SCREENS.REPTILES
  | SCREENS.INSECTS
>;

type TabScreenName = keyof TabParamList;

const TAB_OPTIONS: Record<
  TabScreenName,
  { title: string; headerTintColor: string }
> = {
  [SCREENS.MAMMALS]: { title: 'Млекопитающие', headerTintColor: Colors.Mammals },
  [SCREENS.BIRDS]: { title: 'Птицы', headerTintColor: Colors.Birds },
  [SCREENS.FISH]: { title: 'Рыбы', headerTintColor: Colors.Fish },
  [SCREENS.REPTILES]: { title: 'Рептилии', headerTintColor: Colors.Reptiles },
  [SCREENS.INSECTS]: { title: 'Насекомые', headerTintColor: Colors.Insects },
};

export const Tab = createBottomTabNavigator<TabParamList>();

const Tabs = () => {
  const navigation = useAppNavigation<SCREENS.TABS>();
  return (
    <Tab.Navigator
      screenListeners={{
        state: e => {
          const route = e.data.state.routes[e.data.state.index] as {
            name: TabScreenName;
          };
          const { title, headerTintColor } = TAB_OPTIONS[route.name];
          navigation.setOptions({ title, headerTintColor });
        },
      }}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.White,
          borderTopWidth: 1,
          borderTopColor: Colors.Gray200,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name={SCREENS.MAMMALS}
        component={MammalsScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <MammalsIcon
              width={size}
              height={size}
              stroke={focused ? Colors.Mammals : Colors.Gray600}
            />
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.BIRDS}
        component={BirdsScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <BirdsIcon
              width={size}
              height={size}
              stroke={focused ? Colors.Birds : Colors.Gray600}
            />
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.FISH}
        component={FishScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <FishIcon
              width={size}
              height={size}
              stroke={focused ? Colors.Fish : Colors.Gray600}
            />
          ),
        }}
      />

      <Tab.Screen
        name={SCREENS.REPTILES}
        component={ReptilesScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <ReptilesIcon
              width={size}
              height={size}
              stroke={focused ? Colors.Reptiles : Colors.Gray600}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.INSECTS}
        component={InsectsScreen}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <InsectsIcon
              width={size}
              height={size}
              stroke={focused ? Colors.Insects : Colors.Gray600}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
