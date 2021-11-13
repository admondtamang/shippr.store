import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomFlatList from "../../components/CustomFlatList";
import tw from "tailwind-react-native-classnames";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import ItemList from "../../components/CustomFlatList/ItemList";

export default function Offers() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => true,
        });
    }, [navigation]);
    const data = [
        { id: 1, name: "beer", image: require("../../../assets/icons/beer.png") },
        { id: 1, name: "music", image: require("../../../assets/icons/music.png") },
        { id: 1, name: "Gadget", image: require("../../../assets/icons/electronic.png") },
        { id: 1, name: "food", image: require("../../../assets/icons/food.png") },
        { id: 1, name: "beer", image: require("../../../assets/icons/beer.png") },
        { id: 1, name: "music", image: require("../../../assets/icons/music.png") },
        { id: 1, name: "Gadget", image: require("../../../assets/icons/electronic.png") },
        { id: 1, name: "food", image: require("../../../assets/icons/food.png") },
    ];

    return (
        <SafeAreaView style={tw`px-3`}>
            <Header />

            <CustomFlatList
                horizontal
                data={data}
                type={ItemList.categoryRounded}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />

            <CustomFlatList
                title="Hot Offers"
                icon={<Feather name="heart" size={24} color="black" />}
                horizontal
                data={data}
                type={ItemList.product}
                showViewAll
                twFlatListStyle={`mt-5`}
            />

            <CustomFlatList
                type={ItemList.product}
                title="Hot Offers"
                icon={<Feather name="heart" size={24} color="black" />}
                horizontal
                data={data}
                product
                twFlatListStyle={`mt-5`}
            />

            <CustomFlatList
                title="Hot Offers"
                type={ItemList.product}
                icon={<Feather name="heart" size={24} color="black" />}
                horizontal
                data={data}
                product
                twFlatListStyle={`mt-5`}
            />
        </SafeAreaView>
    );
}
