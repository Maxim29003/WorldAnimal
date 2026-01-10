import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Animal } from '@appTypes/AnimalType';
import { Colors } from '@styles/colors';
import Column from '@layouts/Column/Column';
import { borderRadius } from '@styles/borderRadius';
import { Spacer } from '@ui/Spacer/Spacer';
import UIText from '@ui/UIText/UIText';
import useAppNavigation from '@hooks/useAppNavigation';
import { SCREENS } from '@routes/navigations.types';
import UIButtonIcon from '@ui/UIButtonIcon/UIButtonIcon';
import LikeIcon from '@assets/svg/LikeIcon';
import { useFavoritesStore } from '@store/useFavoritesStore';


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
      style={{
        borderRadius: borderRadius.large,
        backgroundColor: color,
        position: 'relative',
      }}
    >
     
     <View style={{ position: 'absolute', zIndex: 10, right: 7, top: 7 }}>
  <UIButtonIcon
        outline
        icon={isLiked ? <LikeIcon fill={Colors.Favorite} stroke={Colors.Favorite}/> : <LikeIcon/> }
        onPress={()=>{toggleLike(animal.id)}}
        
      />
     </View>

      <View
        style={{
          height: 360,
          borderRadius: borderRadius.large,
          overflow: 'hidden',
        }}
      >
        <Image
          source={{ uri: animal.image }}
          style={{ width: '100%', height: '100%' }}
          resizeMode="cover"
        />
      </View>
      <Spacer vertical={16} />
      <UIText
        color={Colors.TextPrimary}
        style={{ textAlign: 'center' }}
        variant="animalName"
      >
        {animal.name}
      </UIText>
      <Spacer vertical={16} />
    </TouchableOpacity>
  );
};

export default AnimalCard;
