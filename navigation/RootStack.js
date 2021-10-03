import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Landing from "../screens/Landing";
import DrawerNav from '../navigation/DrawerNav';

const Stack = createNativeStackNavigator();
export default function RootStack() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing} options={{ headerShown: false, }} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="DrawerNav" component={DrawerNav} />
           </Stack.Navigator>
        </NavigationContainer>
    );
}