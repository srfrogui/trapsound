import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';

import { useThemedStyles } from '../themes/Colors';
import { AppStack } from './AppStack.js';
import { AuthStack } from './AuthStack.js';

const Router = () => {
    const { getBackgroundColor, getTextColor } = useThemedStyles();

    //logica de autenticacao aqui <----------------------------------
    const auth = false;

    return (
        <>
            <StatusBar backgroundColor={getBackgroundColor()} barStyle={getTextColor()} />
            <NavigationContainer>
                {auth ? <AppStack /> : <AuthStack />}
            </NavigationContainer>
        </>
    );
};

export default Router;