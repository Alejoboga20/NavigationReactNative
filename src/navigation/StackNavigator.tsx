import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenOne } from '../screens/ScreenOne';
import { ScreenTwo } from '../screens/ScreenTwo';
import { ScreenThree } from '../screens/ScreenThree';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="ScreenOne"
        options={{ title: 'ScreenOne' }}
        component={ScreenOne}
      />
      <Stack.Screen
        name="ScreenTwo"
        options={{ title: 'ScreenTwo' }}
        component={ScreenTwo}
      />
      <Stack.Screen
        name="ScreenThree"
        options={{ title: 'ScreenThree' }}
        component={ScreenThree}
      />
    </Stack.Navigator>
  );
};
