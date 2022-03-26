import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabOneScreen } from '../screens/TabOneScreen';
import { TabTwoScreen } from '../screens/TabTwoScreen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
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
      <Tab.Screen
        name="TabOneScreen"
        options={{ title: 'TabOne' }}
        component={TabOneScreen}
      />
      <Tab.Screen
        name="TabTwoScreen"
        options={{ title: 'TabTwo' }}
        component={TabTwoScreen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
