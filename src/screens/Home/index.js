import React from "react";
import { View, Text, ScrollView, ImageBackground, StyleSheet, FlatList, Image, TouchableOpacity, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import Carousel from "../../components/CustomCarosel/Carousel";
import CustomFlatList from "../../components/CustomFlatList";
import ItemList from "../../components/CustomFlatList/ItemList";
import Banner from "./Banner";
import useFetchQuery from "../../hooks/useFetchQuery";
import { STATUS } from "../../utils/constants";
export default function Home() {
    const dummyData = [
        {
            title: "Classic Black Guitar",
            url: "https://www.wallpapertip.com/wmimgs/15-154362_black-guitar-photos-wallpapers-guitar-wallpaper-hd.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 1,
        },
        {
            title: "Acoustic Guitar",
            url: "https://wallpaperaccess.com/full/3560410.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 2,
        },
        {
            title: "Electric Guitar",
            url: "https://wallpaperboat.com/wp-content/uploads/2019/04/electric-guitar-001.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 3,
        },
    ];
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

    const image = { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" };
    const url = "wp-json/wc/v3/products";

    // useEffect(() => {
    //     (()=>{
    //         useFetch
    //     })()
    // }, [])

    const { response, error, isLoading, status } = useFetchQuery("latest", url);
    console.log("data", error, isLoading, status, response);

    if (STATUS.loading == status) {
        return <Text>Loading</Text>;
    }
    if (STATUS.success == status)
        return (
            <ScrollView nestedScrollEnabled={true} style={tw`flex pb-5`}>
                {/* banner */}
                <Banner />

                {/* Categories */}
                <CustomFlatList data={data} type={ItemList.category} title="Explore" numColumns={4} />

                {/* Carousel */}
                <Carousel data={dummyData} />

                {/* Featured Products */}
                <CustomFlatList data={response} type={ItemList.product} title="Featured" numColumns={2} />

                <CustomFlatList
                    title="Featured"
                    horizontal
                    data={data}
                    type={ItemList.product}
                    twFlatListStyle={"mt-5"}
                    ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        );
}
