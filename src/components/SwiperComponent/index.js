import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator, Image, Text } from "react-native";

import ImageView from "react-native-image-viewing";
import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#444FFF",
    },
});

// Need to provide height - <View style={tw`h-2/5 w-full`}>
export default function SwiperComponent({ images }) {
    const [isVisible, setIsVisible] = useState(false);

    // Image preview in full-screen
    const fullImageView = <ImageView images={images} imageIndex={0} visible={isVisible} onRequestClose={() => setIsVisible(false)} />;
    return (
        <>
            {fullImageView}
            <Swiper activeDotColor="#FFF">
                {images.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.slide} onPress={() => setIsVisible(true)}>
                        <Image style={{ width: 400, height: 450 }} PlaceholderContent={<ActivityIndicator />} source={{ uri: item.uri }} />
                    </TouchableOpacity>
                ))}
            </Swiper>
        </>
    );
}
