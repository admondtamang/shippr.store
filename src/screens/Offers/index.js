import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { View, Text, ScrollView, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
export default function Offers() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => false,
        });
    }, [navigation]);
    const data = [
        { id: 1, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 2, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 3, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 4, name: "beer", image: require("../../assets/icons/beer.png") },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity>
            <View style={tw`flex flex-col flex-grow  p-5 m-2 justify-center items-center bg-red-400 rounded-full`}>
                <Image source={item.image} style={{ width: 40, height: 40 }} />
            </View>
            <Text style={tw`text-center font-bold text-gray-500`}>{item.name}</Text>
        </TouchableOpacity>
    );
    return (
        <ScrollView>
            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
                listMode="SCROLLVIEW"
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    );
}
