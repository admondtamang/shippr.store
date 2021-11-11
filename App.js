import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";

export default function App() {
    LogBox.ignoreAllLogs(true);

    return (
        <SafeAreaProvider>
            <StatusBar style={"dark"} />
            <Navigation />
        </SafeAreaProvider>
    );
}
