import ClockIcon from '@assets/svg/ClockIcon';
import LocationIcon from '@assets/svg/LocationIcon';
import WeightIcon from '@assets/svg/WeightIcon';
import Column from '@layouts/Column/Column';
import MainLayout from '@layouts/MainLayout/MainLayout';
import Row from '@layouts/Row/Row';
import { borderRadius } from '@styles/borderRadius';
import { Colors } from '@styles/colors';
import { Spacer } from '@ui/Spacer/Spacer';
import UIText from '@ui/UIText/UIText';
import { Image, StyleSheet, View } from 'react-native';
import InfoRow from './components/InfoRow/InfoRow';
import { isTablet, WIDTH } from '@utils/normalizer';
import useAppRoute from '@hooks/useAppRoute';
import { SCREENS } from '@routes/navigations.types';
import { useLayoutEffect } from 'react';
import useAppNavigation from '@hooks/useAppNavigation';

function DetailScreen() {
  const route = useAppRoute<SCREENS.DETAIL>();
  const navigation = useAppNavigation();
  const { animal, color } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({ title: animal.name });
  }, [navigation, animal.name]);

  const imageWidth = isTablet ? 720 : WIDTH;
  const imageHeight = isTablet
    ? (imageWidth * 9) / 16
    : Math.min(320, WIDTH * 0.6);

  return (
    <MainLayout scrollable>
      <Spacer vertical={20} />
      <View
        style={[
          styles.imageWrapper,

          { width: imageWidth, height: imageHeight, alignSelf: 'center' },
          !isTablet && { paddingHorizontal: 16 },
        ]}
      >
        <Image
          source={{ uri: animal.image }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <Spacer vertical={24} />

      <UIText variant="description" color={Colors.TextPrimary}>
        {animal.description}
      </UIText>

      <Spacer vertical={24} />

      <UIText
        variant="sectionTitle"
        color={Colors.TextPrimary}
        style={{ textAlign: 'left' }}
      >
        Характеристики
      </UIText>

      <Spacer vertical={16} />

      <Column gap={16}>
        <InfoRow
          icon={<LocationIcon />}
          title="Среда обитания"
          desdescription={animal.habitat}
        />
        <InfoRow
          icon={<ClockIcon />}
          title="Продолжительность жизни"
          desdescription={animal.lifespan}
        />
        <InfoRow
          icon={<WeightIcon />}
          title="Вес"
          desdescription={animal.weight}
        />
      </Column>

      <Spacer vertical={24} />

      <UIText
        variant="sectionTitle"
        color={Colors.TextPrimary}
        style={{ textAlign: 'left' }}
      >
        💡 Интересные факты
      </UIText>

      <Spacer vertical={16} />

      <Column
        style={{
          padding: 24,
          backgroundColor: color,
          borderRadius: borderRadius.large,
        }}
        gap={10}
      >
        {animal.facts.map(fact => (
          <Row align="center" key={fact}>
            <UIText variant="characteristicValue" color={Colors.TextPrimary}>
              •
            </UIText>
            <Spacer horizontal={3} />
            <UIText variant="characteristicValue" color={Colors.TextPrimary}>
              {fact}
            </UIText>
          </Row>
        ))}
      </Column>

      <Spacer vertical={20} />
    </MainLayout>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  imageWrapper: {
    width: '100%',
    borderRadius: borderRadius.large,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
