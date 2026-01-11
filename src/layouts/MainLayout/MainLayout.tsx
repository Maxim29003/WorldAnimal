import {
  ScrollView,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

type MainLayoutProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle> | undefined;
  scrollable?: boolean;
} & ViewProps;

const MainLayout = ({
  children,
  style,
  scrollable = false,
  ...viewProps
}: MainLayoutProps) => {
  const insets = useSafeAreaInsets();
  const content = (
    <View
      {...viewProps}
      style={[
        styles.container,
        {
          paddingLeft: insets.left + 16,
          paddingRight: insets.right + 16,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
    >
      {children}
    </View>
  );

  const withScroll = scrollable ? (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {content}
    </ScrollView>
  ) : (
    content
  );

  return withScroll;
};

export default MainLayout;
