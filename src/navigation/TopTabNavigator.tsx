import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { LogBox, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

LogBox.ignoreLogs(['Sending']); //Ignoring warnings with sending

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top: paddingTop } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{ backgroundColor: 'white' }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        style: {
          borderTopColor: colors.primary,
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: React.ReactNode = <></>;

          switch (route.name) {
            case 'Chat':
              iconName = (
                <Icon name="airplane-outline" size={30} color="#000" />
              );
              break;
            case 'Contacts':
              iconName = (
                <Icon name="airplane-outline" size={30} color="#000" />
              );
              break;
            case 'Album':
              iconName = (
                <Icon name="airplane-outline" size={30} color="#000" />
              );
              break;

            default:
              break;
          }

          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
