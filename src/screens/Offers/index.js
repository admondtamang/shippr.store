import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomFlatList from "../../components/CustomFlatList";
import tw from "tailwind-react-native-classnames";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import ItemList from "../../components/CustomFlatList/ItemList";
import response from "../response";
import useFetchQuery from "../../hooks/useFetchQuery";

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
    const url = "wp-json/wc/v3/products";

    const { error, isLoading, status } = useFetchQuery("latest", url);

    return (
        <SafeAreaView style={tw`px-3`}>
            <View style={tw`mb-5`}>
                <Header />
                {/* Category FLatlist */}
                <CustomFlatList
                    horizontal
                    data={data}
                    type={ItemList.categoryRounded}
                    ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Product FlatList */}
            <CustomFlatList
                title="Hot Offers"
                icon={<Feather name="watch" size={24} color="black" />}
                horizontal
                data={response}
                type={ItemList.product}
                showViewAll
                twFlatListStyle={`mt-5`}
            />

            <CustomFlatList
                type={ItemList.product}
                title="Hot Offers"
                icon={<Feather name="feather" size={24} color="black" />}
                horizontal
                data={response}
                product
                twFlatListStyle={`mt-5`}
            />

            <CustomFlatList
                title="Hot Offers"
                type={ItemList.product}
                icon={<Feather name="heart" size={24} color="black" />}
                horizontal
                data={response}
                product
                twFlatListStyle={`mt-5`}
            />
        </SafeAreaView>
    );
}
