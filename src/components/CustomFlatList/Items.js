import { useNavigation } from "@react-navigation/core";
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
const productItem = ({ item }, navigation) => {
    const { id, name, price, regular_price, images, on_sale, slug } = item;

    var discount;
    // const navigation = useNavigation();
    const onPress = () => {
        console.log(navigation);
        navigation.navigate("ProductDetail", {
            slug,
        });
    };

    if (regular_price) {
        discount = ((regular_price - price) / regular_price) * 100;
        discount = discount.toFixed(0);
    }
    // image validation choosing 1st image
    let image;
    if (typeof images == "object") {
        image = images?.length > 0 ? "https://facebook.github.io/react/img/logo_small.png" : images[0].src;
    }

    return (
        <TouchableOpacity onPress={onPress} style={tw` mr-5`}>
            <Image
                source={{
                    uri: images?.length > 0 ? images[0]?.src : image,
                }}
                style={tw`w-36 h-48 rounded-lg`}
            />
            <Text numberOfLines={1} style={tw`w-full my-1 text-sm mt-3 truncate`}>
                {name}
            </Text>
            <Text style={tw`font-bold text-lg w-full`}>
                <Text style={tw`font-bold text-sm text-gray-500`}>NRS.</Text> {price}
            </Text>
        </TouchableOpacity>
    );
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
