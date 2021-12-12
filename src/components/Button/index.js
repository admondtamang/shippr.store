import React from "react";
import tw from "tailwind-react-native-classnames";
import RippleButton from "../RippleButton";
import { Text } from "react-native";

export default function Button({ icon, textStyle, label, ...rest }) {
    return (
        <RippleButton {...rest}>
            {icon}

            {label && <Text style={tw`${textStyle || "font-bold text-base ml-2 text-white shadow"} `}>{label}</Text>}
        </RippleButton>
    );
}
