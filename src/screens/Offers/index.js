import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomFlatList from "../../components/CustomFlatList";
import tw from "tailwind-react-native-classnames";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";

export default function Offers() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => true,
        });
    }, [navigation]);
    const data = [
        { id: 1, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 2, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 3, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 4, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 3, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 4, name: "beer", image: require("../../assets/icons/beer.png") },
    ];

    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={tw`ml-2`}>
            <View style={tw`flex flex-col flex-grow  p-4 justify-center items-center bg-gray-400 shadow-md rounded-full`}>
                <Image source={item.image} style={{ width: 30, height: 30 }} />
            </View>
            <Text style={tw`text-center text-black mt-1 uppercase w-full`}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={tw`px-3`}>
            <Header />

            <CustomFlatList
                horizontal
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />

            <CustomFlatList
                title="Hot Offers"
                icon={<Feather name="heart" size={24} color="black" />}
                horizontal
                data={data}
                product
                showViewAll
                twFlatListStyle={`mt-5`}
            />

            <CustomFlatList
                title="Hot Offers"
                icon={<Feather name="heart" size={24} color="black" />}
                horizontal
                data={data}
                product
                twFlatListStyle={`mt-5`}
            />

            <CustomFlatList
                title="Hot Offers"
                icon={<Feather name="heart" size={24} color="black" />}
                horizontal
                data={data}
                product
                twFlatListStyle={`mt-5`}
            />
        </SafeAreaView>
    );
}
