import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme/appTheme';

export const ScreenTwo = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hello World',
      headerBackTitle: 'Go Back',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ScreenTwo</Text>

      <Button
        title="Go ScreenThree"
        onPress={() => navigator.navigate('ScreenThree')}
      />
    </View>
  );
};
