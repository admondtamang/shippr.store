import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./BottomNavigation";
import ProductDetail from "../screens/ProductDetail";
import OnBoarding from "../screens/OnBoarding";
import Splash from "../components/Splash";
import CheckOutScreen from "../screens/CheckOut";
import CategoryDetail from "../screens/CategoryDetail";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function navigation() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

    useEffect(async () => {
        const appData = await AsyncStorage.getItem("isAppFirstLaunched");
        if (appData == null) {
            setIsAppFirstLaunched(true);
            AsyncStorage.setItem("isAppFirstLaunched", "false");
        } else {
            setIsAppFirstLaunched(false);
        }

        AsyncStorage.removeItem("isAppFirstLaunched");
        console.log("Launch App", isAppFirstLaunched, appData);
    }, [isAppFirstLaunched]);
    console.log("Launch App", isAppFirstLaunched);

    return (
        <Stack.Navigator>
            {isAppFirstLaunched && <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />}
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Root" component={BottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
            <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
            <Stack.Screen name="Checkout" component={CheckOutScreen} />

            {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group> */}
        </Stack.Navigator>
    );
}
