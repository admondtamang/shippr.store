import React from "react";
import { View, Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import Product from "../Product";
import Kimage from "../../../assets/icons/beer.png";

import RippleButton from "../RippleButton";
//     { id: 1, name: "music", image: require("../../../assets/icons/music.png") },

// home screen item
const categoryItem = ({ item }, navigation) => (
    <RippleButton
        onPress={() => navigation.navigate("CategoryDetail", item)}
        style={tw`flex flex-col flex-grow drop-shadow-lg p-2 py-3 m-2 justify-center items-center shadow  bg-gray-200 rounded-lg`}
    >
        <Image source={item.image ? { uri: item.image } : Kimage} style={{ width: 30, height: 30 }} />

        <Text style={tw`text-center font-bold text-gray-500 mt-1`}>{item.name}</Text>
    </RippleButton>
);

// Product item
const productItem = ({ item }) => {
    return <Product item={item} />;
};

// Product item
const small_productItem = ({ item }) => {
    return <Product item={item} small={true} />;
};

// Offer screen item
const categoryRoundedItem = ({ item }, navigation) => (
    <RippleButton style={tw`ml-2`} onPress={() => navigation.navigate("CategoryDetail", item)}>
        <View style={tw`flex flex-col flex-grow  p-4 justify-center items-center bg-gray-200 shadow-md rounded-full`}>
            <Image source={item.image} style={{ width: 30, height: 30 }} />
        </View>
        <Text style={tw`text-center text-black mt-1 capitalize tracking-wide w-full`}>{item.name}</Text>
    </RippleButton>
);
export { productItem, categoryItem, categoryRoundedItem, small_productItem };
