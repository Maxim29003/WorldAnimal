import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useAppNavigation from '@hooks/useAppNavigation';
import { Colors } from '@styles/colors';
import UIText from '@ui/UIText/UIText';
import Row from '@layouts/Row/Row';
import UIButtonIcon from '@ui/UIButtonIcon/UIButtonIcon';
import LikeIcon from '@assets/svg/LikeIcon';
import { SCREENS } from '@routes/navigations.types';
import BackIcon from '@assets/svg/BackIcon';
import { useFavoritesStore } from '@store/useFavoritesStore';

type HeaderProps = {
  title?: string;
  color?: string;
  variant: 'primary' | 'secondary';
};

const Header = ({ title, color, variant = 'primary' }: HeaderProps) => {
  const favorites = useFavoritesStore(s => s.favorites);
  const insets = useSafeAreaInsets();
  const navigation = useAppNavigation();
  return (
    <View
      style={{
        backgroundColor: Colors.White,
        paddingBottom: 15,
        elevation: 5,
        borderBottomWidth: 1,
        borderBottomColor: Colors.Gray200,
        paddingTop: insets.top + 15,
        paddingLeft: insets.left + 15,
        paddingRight: insets.right + 15,
      }}
    >
      {variant === 'secondary' && (
        <Row align="center" gap={12}>
          <UIButtonIcon
            icon={<BackIcon stroke={Colors.Gray800} />}
            onPress={() => navigation.goBack()}
          />

          <UIText color={color}>{title}</UIText>
        </Row>
      )}

      {variant === 'primary' && (
        <Row justify="space-between" align="center">
          <UIText color={color}>{title}</UIText>
          <UIButtonIcon
            icon={
              favorites.length > 0 ? (
                <LikeIcon fill={Colors.Favorite} stroke={Colors.Favorite} />
              ) : (
                <LikeIcon stroke={Colors.Favorite} />
              )
            }
            onPress={() => {
              navigation.navigate(SCREENS.FAVORITES);
            }}
          />
        </Row>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
