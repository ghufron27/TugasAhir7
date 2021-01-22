import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screen/home';
import ChatScreen from './screen/chat';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Chat"
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
