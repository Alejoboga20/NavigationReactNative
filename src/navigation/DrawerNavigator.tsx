import React from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={InternalDrawer}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const InternalDrawer = (
  props: DrawerContentComponentProps<DrawerContentOptions>,
) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
    </DrawerContentScrollView>
  );
};