import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SafeContainer({ children, ...rest }) {
    return <SafeAreaView {...rest}>{children}</SafeAreaView>;
}
