import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/screens/welcome';
import Game from './src/screens/game';
import Success from './src/screens/success';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headersShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Game" component={Game}/>
        <Stack.Screen name="Success" component={Success}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}