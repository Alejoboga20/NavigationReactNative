import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'TabOneScreen':
              iconName = 'bandage-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;

            default:
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="TabOneScreen"
        options={{ title: 'TabOne' }}
        component={TabOneScreen}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{ title: 'TopTabNavigator' }}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';

          switch (route.name) {
            case 'TabOneScreen':
              iconName = 'bandage-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'basketball-outline';
              break;
            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;

            default:
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}>
      {/* <Tab.Screen
        name="TabOneScreen"
        options={{
          title: 'TabOne',
          tabBarIcon: props => <Text style={{ color: props.color }}>T1</Text>,
        }}
        component={TabOneScreen}
      /> */}
      <BottomTabIOS.Screen
        name="TabOneScreen"
        options={{ title: 'TabOne' }}
        component={TabOneScreen}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{ title: 'TopTabNavigator' }}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
