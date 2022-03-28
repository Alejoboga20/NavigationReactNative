import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const PersonScreen = ({ navigation, route }: PersonScreenProps) => {
  const params = route.params;
  const { changeUserName } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  useEffect(() => {
    changeUserName(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};

interface PersonScreenProps
  extends StackScreenProps<RootStackParams, 'PersonScreen'> {}
