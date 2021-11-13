import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

// home screen item
const categoryItem = ({ item }) => (
    <TouchableOpacity
        style={tw`flex flex-col flex-grow drop-shadow-lg p-2 py-3 m-2 justify-center items-center shadow  bg-gray-200 rounded-lg`}
    >
        <Image source={item.image} style={{ width: 30, height: 30 }} />

        {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
        <Text style={tw`text-center font-bold text-gray-500 mt-1`}>{item.name}</Text>
    </TouchableOpacity>
);

// Product item
const productItem = ({ item }) => (
    <View style={tw` mr-5`}>
        <Image
            style={tw`w-36 h-48 rounded-lg`}
            source={{ uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" }}
        />
        <Text style={tw`w-full my-1 text-sm mt-3`}>Puffer Jacket</Text>
        <Text style={tw`font-bold text-base w-full`}>NRS. 500</Text>
    </View>
);

// Offer screen item
const categoryRoundedItem = ({ item }) => (
    <TouchableOpacity style={tw`ml-2`}>
        <View style={tw`flex flex-col flex-grow  p-4 justify-center items-center bg-gray-200 shadow-md rounded-full`}>
            <Image source={item.image} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={tw`text-center text-black mt-1 uppercase w-full`}>{item.name}</Text>
    </TouchableOpacity>
);
export { productItem, categoryItem, categoryRoundedItem };
