import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenOne } from '../screens/ScreenOne';
import { ScreenTwo } from '../screens/ScreenTwo';
import { ScreenThree } from '../screens/ScreenThree';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="ScreenThree" component={ScreenThree} />
    </Stack.Navigator>
  );
};
