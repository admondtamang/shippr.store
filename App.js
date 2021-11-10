import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";

export default function App() {
    return (
        <SafeAreaProvider>
            {/* <StatusBar style={!theme.dark ? "dark" : "light"} /> */}
            <StatusBar style={"light"} />
            {/* <Home /> */}
            <Navigation />
        </SafeAreaProvider>
    );
}
