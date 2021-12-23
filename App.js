import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/navigation";

import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./src/redux/configureStore";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";
import { decode, encode } from "base-64";

import { DefaultTheme, Provider as PaperProvider } from "@admond/react-native-paper";

export default function App() {
    LogBox.ignoreAllLogs(true);
    const queryClient = new QueryClient();
    let persistor = persistStore(store);

    if (!global.btoa) {
        global.btoa = encode;
    }

    if (!global.atob) {
        global.atob = decode;
    }
    const [loaded] = useFonts({
        Montserrat: require("./assets/fonts/Montserrat-Bold.ttf"),
    });

    if (!loaded) {
        return null;
    }

    const theme = {
        ...DefaultTheme,
        roundness: 50,
        colors: {
            ...DefaultTheme.colors,
            primary: "#3498db",
            accent: "#f1c40f",
        },
    };

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <PaperProvider theme={theme}>
                        <SafeAreaProvider>
                            <Toast />
                            <StatusBar style={"dark"} />
                            <Navigation />
                        </SafeAreaProvider>
                    </PaperProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    );
}
