import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabOneScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Icons</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color="#000" />
      </Text>
    </View>
  );
};
