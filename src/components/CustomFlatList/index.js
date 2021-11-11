import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function CustomFlatList({
    data,
    showViewAll,
    icon,
    renderItem,
    twFlatListStyle,
    title,
    product,
    numColumns,
    horizontal,
    ...rest
}) {
    // Product View
    const productItem = ({ item }) => (
        <View style={tw` mr-5`}>
            <Image
                style={tw`w-36 h-48 rounded-lg`}
                source={{ uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" }}
            />
            <Text style={tw`width-full my-1 text-sm mt-3`}>Puffer Jacket</Text>
            <Text style={tw`font-bold text-base width-full`}>NRS. 500</Text>
        </View>
    );

    // header for FlatList
    const flatListHeader = (
        <View style={tw`flex flex-row justify-between items-center mb-2`}>
            <View style={tw`flex flex-row items-center`}>
                {icon && icon}
                {title && <Text style={tw`text-lg font-bold p-2`}>{title}</Text>}
            </View>
            <TouchableOpacity style={tw`font-bold`}>
                <Text> {showViewAll ? "View All" : " "}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={tw` ${twFlatListStyle}`}>
            {title && flatListHeader}
            <FlatList
                data={data}
                renderItem={product ? productItem : renderItem}
                {...(numColumns ? { numColumns: numColumns, ...rest } : { ...rest, horizontal })}
            />
        </View>
    );
}
