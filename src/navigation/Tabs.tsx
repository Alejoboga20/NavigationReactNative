import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { TabTwoScreen } from '../screens/TabTwoScreen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';

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
              iconName = 'T1';
              break;
            case 'TabTwoScreen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;

            default:
              break;
          }

          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}>
      <BottomTabAndroid.Screen
        name="TabOneScreen"
        options={{ title: 'TabOne' }}
        component={TabOneScreen}
      />
      <BottomTabAndroid.Screen
        name="TabTwoScreen"
        options={{ title: 'TabTwo' }}
        component={TabTwoScreen}
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
              iconName = 'T1';
              break;
            case 'TabTwoScreen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;

            default:
              break;
          }

          return <Text style={{ color }}>{iconName}</Text>;
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
        name="TabTwoScreen"
        options={{ title: 'TabTwo' }}
        component={TabTwoScreen}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
