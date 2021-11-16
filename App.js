import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import { Provider as PaperProvider } from "react-native-paper";

import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./src/navigation";

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
                    <PaperProvider>
                        <SafeAreaProvider>
                            <StatusBar style={"dark"} />
                            <Navigation />
                        </SafeAreaProvider>
                    </PaperProvider>
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    );
}
