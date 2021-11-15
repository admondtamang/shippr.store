import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";

import { PersistGate } from "redux-persist/integration/react";

import { persistStore } from "redux-persist";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./src/redux/configureStore";

export default function App() {
    LogBox.ignoreAllLogs(true);
    const queryClient = new QueryClient();
    let persistor = persistStore(store);
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <SafeAreaProvider>
                        <StatusBar style={"dark"} />
                        <Navigation />
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    );
}
