import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

export default function Header() {
    return (
        <View style={tw`flex flex-row justify-between my-4`}>
            <View style={tw`flex flex-row`}>
                <Text style={tw`font-bold text-xl`}>Shipper.</Text>
                <Text style={tw`text-xl italic`}>store</Text>
            </View>
            <View style={tw`flex flex-row `}>
                <TouchableOpacity style={tw`mr-2`}>
                    <Feather name="heart" size={24} color="black" />
                </TouchableOpacity>
                {/* <TouchableOpacity>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity> */}
            </View>
        </View>
    );
}
