import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';

export const PersonScreen = ({ navigation, route }: PersonScreenProps) => {
  const params = route.params;

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

interface PersonScreenProps
  extends StackScreenProps<RootStackParams, 'PersonScreen'> {}
