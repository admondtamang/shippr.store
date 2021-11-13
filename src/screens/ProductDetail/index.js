import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-vector-icons/Entypo";

export default function ProductDetail() {
    const image = { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" };

    return (
        <View style={tw`flex h-full bg-blue`}>
            <Image source={image} style={tw`h-2/5 w-full`} />
            <ScrollView style={tw`h-full  p-3`}>
                <Text style={tw`font-bold text-lg text-gray-900 leading-8`}>
                    ORIGINAL 24K PURE GOLD SERUM AMPOULE Face Serum, 24K Gold Serum, Original Korean 24K Gold Serum, Maison De Nature Best
                    Face Serum /Smart Gallery 100ml
                </Text>
                <Text style={tw`font-bold text-xl w-full pt-2`}>
                    <Text style={tw`font-bold text-sm text-gray-500`}>NRS.</Text> 5,000
                </Text>
                <Text style={tw` leading-8`}>
                    Runs on Electricity no hassles of heating water on gas or heaters. Can be keept inside the quilt to heat up the quilt or
                    use on low temperature for massaging body parts Gives relief from pain and makes you feel comfortable. A very useful
                    product for the winters Power: 500 watts Frequency : 50 Hz
                </Text>
                <Text style={tw`text-base pt-2`}></Text>
            </ScrollView>
            <TouchableOpacity
                style={tw`w-full static my-2 py-2 flex flex-row shadow-sm text-center bg-yellow-100 rounded-xl mt-4 flex justify-center items-center`}
            >
                <Icon name="shopping-basket" size={20} color="orange" />
                <Text style={tw`font-bold text-base ml-2 shadow text-yellow-600`}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    );
}
