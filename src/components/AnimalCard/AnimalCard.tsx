import { Image, TouchableOpacity, View } from 'react-native';
import React, { memo } from 'react';
import { Animal } from '@appTypes/AnimalType';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import UIText from '@ui/UIText/UIText';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import UIButtonIcon from '@ui/UIButtonIcon/UIButtonIcon';
import LikeIcon from '@assets/svg/LikeIcon';
import { useFavoritesStore } from '@store/useFavoritesStore';
import { styles } from './styles';

type AnimalCardProps = {
  animal: Animal;
  color: Colors;
};

const AnimalCard = ({ animal, color }: AnimalCardProps) => {
  const toggleLike = useFavoritesStore(s => s.toggleLike);
  const isLiked = useFavoritesStore(s => s.isLiked(animal.id));

  const navigation = useAppNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(SCREENS.DETAIL, { animal, color });
      }}
      style={[styles.card, { backgroundColor: color }]}
    >
      <View style={styles.likeButton}>
        <UIButtonIcon
          outline
          icon={
            isLiked ? (
              <LikeIcon fill={Colors.Favorite} stroke={Colors.Favorite} />
            ) : (
              <LikeIcon />
            )
          }
          onPress={() => {
            toggleLike(animal.id);
          }}
        />
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: animal.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Spacer vertical={16} />
      <UIText
        color={Colors.TextPrimary}
        style={styles.title}
        variant="animalName"
      >
        {animal.name}
      </UIText>
      <Spacer vertical={16} />
    </TouchableOpacity>
  );
};

export default memo(AnimalCard);
