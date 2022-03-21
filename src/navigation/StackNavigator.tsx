import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenOne } from '../screens/ScreenOne';
import { ScreenTwo } from '../screens/ScreenTwo';
import { ScreenThree } from '../screens/ScreenThree';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackParams = {
  ScreenOne: undefined;
  ScreenTwo: undefined;
  ScreenThree: undefined;
  PersonScreen: { id: number; name: string };
};

const Stack = createStackNavigator<RootStackParams>();

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

      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
};
