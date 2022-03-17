import React from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';

export const ScreenTwo = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>ScreenTwo</Text>

      <Button
        title="Go ScreenThree"
        onPress={() => navigator.navigate('ScreenThree')}
      />
    </View>
  );
};
