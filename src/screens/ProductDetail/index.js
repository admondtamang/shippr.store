import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function ProductDetail() {
    const image = { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" };

    return (
        <View style={tw`flex h-full`}>
            <Image source={image} style={tw`h-3/5 w-full`} />
            <View style={tw`h-full p-3`}>
                <Text style={tw`font-bold text-lg leading-8`}>
                    ORIGINAL 24K PURE GOLD SERUM AMPOULE Face Serum, 24K Gold Serum, Original Korean 24K Gold Serum, Maison De Nature Best
                    Face Serum /Smart Gallery 100ml
                </Text>
                <Text style={tw`font-bold text-xl pt-2`}>
                    <Text style={tw`text-gray-300`}>Rs.</Text> 16000
                </Text>
                <TouchableOpacity style={tw`w-full py-3 text-center bg-gray-500 rounded-xl mt-4 flex justify-center items-center`}>
                    <Text style={tw`font-bold text-lg`}>Add To Cart</Text>
                </TouchableOpacity>
                <Text style={tw`text-base pt-2`}></Text>
            </View>
            <Text></Text>
        </View>
    );
}
