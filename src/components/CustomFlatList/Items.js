import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import Product from "../Product";

// home screen item
const categoryItem = ({ item }) => (
    <TouchableOpacity
        style={tw`flex flex-col flex-grow drop-shadow-lg p-2 py-3 m-2 justify-center items-center shadow  bg-gray-200 rounded-lg`}
    >
        <Image source={item.image} style={{ width: 30, height: 30 }} />
        <Text style={tw`text-center font-bold text-gray-500 mt-1`}>{item.name}</Text>
    </TouchableOpacity>
);

// Product item
const productItem = ({ item }) => {
    return <Product item={item} />;
};

// Offer screen item
const categoryRoundedItem = ({ item }) => (
    <TouchableOpacity style={tw`ml-2`}>
        <View style={tw`flex flex-col flex-grow  p-4 justify-center items-center bg-gray-200 shadow-md rounded-full`}>
            <Image source={item.image} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={tw`text-center text-black mt-1 capitalize tracking-wide w-full`}>{item.name}</Text>
    </TouchableOpacity>
);
export { productItem, categoryItem, categoryRoundedItem };
