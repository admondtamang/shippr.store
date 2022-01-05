import React from "react";

import LottieFile from "../LottieFile";
import LoadingLottie from "../../assets/lottie/58604-loading.json";
import { Surface } from "@admond/react-native-paper";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
export default function Loading() {
    return (
        <View style={{ flex: 1 }}>
            <LottieFile loop={true} animationData={LoadingLottie} message="Loading" />
        </View>
    );
}
