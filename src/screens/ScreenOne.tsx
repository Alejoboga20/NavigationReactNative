import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';

export const ScreenOne = ({ navigation }: ScreenOneProps) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ScreenOne</Text>

      <Button
        title="Go Screen Two"
        onPress={() => navigation.navigate('ScreenTwo')}
      />

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.bigButton, backgroundColor: '#5856d6' }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'User',
            })
          }>
          <View>
            <Text style={styles.bigButtonText}>User</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.bigButton, backgroundColor: '#ff9427' }}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'TestingProps',
            })
          }>
          <View>
            <Text style={styles.bigButtonText}>Testing</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface ScreenOneProps extends DrawerScreenProps<any, any> {}
