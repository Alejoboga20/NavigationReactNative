import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

export const PersonScreen = ({ navigation, route }: PersonScreenProps) => {
  const params = route.params as RouteParams;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

interface PersonScreenProps extends StackScreenProps<any, any> {}

interface RouteParams {
  id: number;
  name: string;
}
