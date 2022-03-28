import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {
  const { authState } = useContext(AuthContext);
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top + 20 }}>
      <Text style={styles.title}>Settings Screens</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  );
};
