import React from "react";
import { Text } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Tag({ label, onPressTags }) {
    return (
        <Text onPress={() => onPressTags(label)} style={tw`p-2 mr-2 rounded-full font-bold bg-white`}>
            {label}
        </Text>
    );
}
