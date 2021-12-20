import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import RippleButton from "../RippleButton";
import Icon from "react-native-vector-icons/Entypo";

export default function FullHeightWithButton({ children, onPress, buttonTitle }) {
    return (
        <View style={tw`flex h-full`}>
            {children}
            <RippleButton
                onPress={onPress}
                style={tw`p-3 my-2 mb-14 flex flex-row shadow-sm text-center bg-blue-800 rounded-lg  flex justify-center items-center`}
            >
                <Icon name="shopping-basket" size={20} color="white" />
                <Text style={tw`font-bold text-base ml-2 text-white shadow `}>{buttonTitle}</Text>
            </RippleButton>
        </View>
    );
}
