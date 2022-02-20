import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Screens
import Continent from '../screens/Continents'
import CountryList from '../screens/CountryList'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Continent" component={Continent} />
                <Stack.Screen name="CountryList" component={CountryList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;