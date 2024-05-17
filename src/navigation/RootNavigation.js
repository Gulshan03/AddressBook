import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import AddressBook from '../components/AddressBook';
import ManageProfile from '../components/ManageProfile';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
        name="Splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      /> */}
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddressBook"
          component={AddressBook}
          // options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageProfile"
          component={ManageProfile}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
