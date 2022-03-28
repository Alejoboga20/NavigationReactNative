import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';

export const TabOneScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.globalMargin, marginTop: top }}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="car-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="images-outline" />
      </Text>
    </View>
  );
};
