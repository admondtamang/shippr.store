import React from "react";
import { View, Text, ScrollView, ImageBackground, StyleSheet, FlatList, Image, TouchableOpacity, Button } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Home() {
    const data = [
        { id: 1, name: "beer", image: { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" } },
        { id: 2, name: "beer", image: { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" } },
        { id: 3, name: "beer", image: { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" } },
        { id: 4, name: "beer", image: { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" } },
        { id: 5, name: "beer", image: { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" } },
        { id: 6, name: "beer", image: { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" } },
        { id: 7, name: "beer", image: { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" } },
        { id: 7, name: "beer", image: { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" } },
    ];
    const image = { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={tw`flex flex-col flex-grow drop-shadow-lg p-2 m-2 justify-center items-center bg-red-200 rounded-lg`}>
            <Image source={image} style={{ width: 40, height: 40 }} />

            {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
            <Text style={tw`text-center`}>{item.name}</Text>
        </TouchableOpacity>
    );
    return (
        <ScrollView style={styles.container}>
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
            <View style={tw`p-2`}>
                <Text style={tw`text-base font-bold`}>Explore</Text>
                <FlatList data={data} renderItem={renderItem} numColumns={4} />
            </View>

            {/* Banners */}
            <View style={tw`p-2`}>
                <Text style={tw`text-base font-bold`}>Featured</Text>
                <FlatList data={data} renderItem={renderItem} numColumns={2} />
            </View>
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
