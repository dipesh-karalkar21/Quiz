import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {View } from 'react-native'
import RootStack from './navigation/RootStack'
export default function App() {
    return(
        <View>
            <RootStack/>
        </View>
    )
}