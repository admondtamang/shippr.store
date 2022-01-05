import React from "react";
import { View, Text, ImageBackground } from "react-native";
import tw from "tailwind-react-native-classnames";
import RippleButton from "../../components/RippleButton";

export default function Banner() {
    const image = { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" };
    return (
        <RippleButton onPress={() => null}>
            <ImageBackground source={image} style={tw`h-60`} resizeMode="cover">
                <View style={tw`mt-28 ml-5`}>
                    <Text style={tw`text-xl text-white font-bold`}>Hi, User</Text>
                    <Text style={tw`text-lg text-white pb-2`}>Are you looking for Gift?</Text>
                    <RippleButton onPress={() => null} style={tw`w-20 flex justify-center items-center p-1 rounded-sm bg-gray-100`}>
                        <Text style={tw`font-bold`}>Shop Now</Text>
                    </RippleButton>
                </View>
            </ImageBackground>
        </RippleButton>
    );
}
