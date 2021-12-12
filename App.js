import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { Provider as PaperProvider } from "@admond/react-native-paper";

import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/navigation";

import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./src/redux/configureStore";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";
import { decode, encode } from "base-64";

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

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <PaperProvider>
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
