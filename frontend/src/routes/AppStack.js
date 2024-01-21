import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

                                                                    import { View, Text } from "react-native";
                                                                    function Home() {
         //apenas testes....//
                                                                        return(
                                                                            <View>
                                                                                <Text style={{flex:1,alignItems: 'center', justfyContent: 'center'}}>Casinha po</Text>
                                                                            </View>
                                                                        );
                                                                    }

const Stack = createStackNavigator();

export function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};