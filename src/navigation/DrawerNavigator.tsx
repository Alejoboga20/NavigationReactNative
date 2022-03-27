import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles, colors } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={InternalDrawer}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const InternalDrawer = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
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

      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={{ ...styles.menuButton, flexDirection: 'row' }}>
          <Icon name="compass-outline" size={20} color={colors.primary} />
          <Text style={styles.menuText}>Stack Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={{ ...styles.menuButton, flexDirection: 'row' }}>
          <Icon name="cog-outline" size={20} color={colors.primary} />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
