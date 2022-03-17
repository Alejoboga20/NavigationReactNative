import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

export const ScreenThree = ({ navigation }: ScreenThreeProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ScreenThree</Text>

      <Button title="Go Back" onPress={() => navigation.pop()} />

      <Button title="Go Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

interface ScreenThreeProps extends StackScreenProps<any, any> {}
