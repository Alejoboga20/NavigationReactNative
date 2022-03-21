import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/appTheme';

export const ScreenOne = ({ navigation }: ScreenOneProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ScreenOne</Text>

      <Button
        title="Go Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 1,
            name: 'User',
          })
        }>
        <View>
          <Text>Navigate with arguments</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('PersonScreen', {
            id: 2,
            name: 'TestingProps',
          })
        }>
        <View>
          <Text>Navigate with alternative arguments</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

interface ScreenOneProps extends StackScreenProps<any, any> {}
