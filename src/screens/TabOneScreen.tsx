import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabOneScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.globalMargin, marginTop: top }}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color="#000" />
        <Icon name="clip" size={30} color="#000" />
        <Icon name="car-outline" size={30} color="#000" />
      </Text>
    </View>
  );
};
