import { useNavigation } from "@react-navigation/core";
import React, { useLayoutEffect } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomFlatList from "../../components/CustomFlatList";
import tw from "tailwind-react-native-classnames";
import Header from "../../components/Header";
import { Feather } from "@expo/vector-icons";
import ItemList from "../../components/CustomFlatList/ItemList";
// import response from "../response";
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

    const { error, isLoading, status, response } = useFetchQuery("latest", url);

    return (
        <ScrollView style={tw`py-9 `}>
            <View style={tw`mb-5`}>
                <Header />
                {/* Category FLatlist */}
                <CustomFlatList
                    horizontal
                    data={data}
                    type={ItemList.categoryRounded}
                    ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={tw`pb-24`}>
                {/* Product FlatList */}
                <CustomFlatList
                    title="Hot Offers"
                    icon={<Feather name="watch" size={24} color="black" />}
                    horizontal
                    data={response}
                    type={ItemList.product}
                    showViewAll
                    ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
                    twFlatListStyle={`mt-1`}
                />

                <CustomFlatList
                    type={ItemList.product}
                    title="Hot Offers"
                    icon={<Feather name="feather" size={24} color="black" />}
                    horizontal
                    data={response}
                    ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
                />

                <CustomFlatList
                    title="Hot Offers"
                    type={ItemList.product}
                    icon={<Feather name="heart" size={24} color="black" />}
                    horizontal
                    data={response}
                    ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
                />
            </View>
        </ScrollView>
    );
}
