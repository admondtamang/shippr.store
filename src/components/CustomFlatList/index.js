import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { productItem, categoryItem, categoryRoundedItem, small_productItem } from "./Items";
import list from "./ItemList";
import RippleButton from "../RippleButton";

export default function CustomFlatList({
    data,
    showViewAll,
    icon,
    renderItem,
    twFlatListStyle,
    type,
    title,
    product,
    numColumns,
    horizontal,
    ...rest
}) {
    /**
     *
     * @param {*} item renderitem default params from ListView
     * @returns Predefined flatlist in Items component
     */
    const handleRenderItem = (item) => {
        switch (type) {
            case list.category:
                return categoryItem(item);
            case list.product:
                return productItem(item);
            case list.small_product:
                return small_productItem(item);
            case list.categoryRounded:
                return categoryRoundedItem(item);
            default:
                return renderItem;
        }
    };

    /**
     * header for FlatList
     */
    const flatListHeader = (
        <View style={tw`flex flex-row justify-between items-center pb-2 `}>
            <View style={tw`flex flex-row items-center`}>
                {icon && icon}
                {title && <Text style={tw`text-lg font-bold p-2`}>{title}</Text>}
            </View>

            {showViewAll && (
                <RippleButton onPress={() => null}>
                    <Text style={tw`font-bold mr-3 p-2 rounded-lg bg-gray-300`}>More</Text>
                </RippleButton>
            )}
        </View>
    );

    return (
        <View style={tw`${horizontal ? "ml-3" : "m-3"} `}>
            {title && flatListHeader}
            <FlatList
                data={data}
                keyExtractor={(item, key) => key}
                renderItem={handleRenderItem}
                showsVerticalScrollIndicator={false}
                // showsHorizontalScrollIndicator={false}
                style={tw`${twFlatListStyle}`}
                {...(numColumns ? { numColumns: numColumns, ...rest } : { ...rest, horizontal })}
            />
        </View>
    );
}
