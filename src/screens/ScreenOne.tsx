import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const ScreenOne = ({ navigation }: ScreenOneProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ScreenOne</Text>

      <Button
        title="Go Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
    </View>
  );
};

interface ScreenOneProps extends StackScreenProps<any, any> {}
