import React from "react";
import { View, Text, ScrollView, ImageBackground, StyleSheet, FlatList, Image, TouchableOpacity, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import Carousel from "../../components/CustomCarosel/Carousel";
import CustomFlatList from "../../components/CustomFlatList";

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
        { id: 1, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 2, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 3, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 4, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 5, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 6, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 7, name: "beer", image: require("../../assets/icons/beer.png") },
        { id: 7, name: "beer", image: require("../../assets/icons/beer.png") },
    ];

    const image = { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={tw`flex flex-col flex-grow drop-shadow-lg p-2 m-2 justify-center items-center shadow  bg-gray-200 rounded-lg`}
        >
            <Image source={item.image} style={{ width: 40, height: 40 }} />

            {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
            <Text style={tw`text-center font-bold text-gray-500`}>{item.name}</Text>
        </TouchableOpacity>
    );
    return (
        <ScrollView nestedScrollEnabled={true} style={styles.container}>
            {/* banner */}
            <ImageBackground source={image} style={tw`h-60`} resizeMode="cover">
                <View style={tw`mt-28 ml-5`}>
                    <Text style={tw`text-xl text-white font-bold`}>Hi, User</Text>
                    <Text style={tw`text-lg text-white pb-2`}>Are you looking for Gift?</Text>
                    <TouchableOpacity style={tw`w-20 flex justify-center items-center p-1 rounded-sm bg-gray-100`}>
                        <Text style={tw`font-bold`}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {/* <View style={tw`p-4 android:pt-2 bg-red-300 flex-row`}>
                <Text style={tw`text-md tracking-wide`}>Hello World</Text>
            </View> */}

            {/* Categories */}
            <CustomFlatList data={data} renderItem={renderItem} title="Explore" numColumns={4} />

            {/* Carousel */}
            <Carousel data={dummyData} />

            {/* Banners */}
            <CustomFlatList data={data} renderItem={renderItem} title="Featured" numColumns={2} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    image: {
        flex: 1,
        height: 300,
        justifyContent: "center",
    },
    catImage: {
        flex: 1,
        height: 20,
        width: 20,
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    },
});
