import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Animated, ScrollView, SafeAreaView, ToastAndroid } from "react-native";
import tw from "tailwind-react-native-classnames";
import { WIDTH } from "../../utils/screenSize";
import HTML from "react-native-render-html";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/Entypo";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/cart/cartSlice";
import useFetch from "../../hooks/useFetch";
import SwiperComponent from "../../components/SwiperComponent";
import animationData from "../../assets/lottie/no-picture.json";
import LottieFile from "../../components/LottieFile";

import Toast from "react-native-toast-message";
import { Divider, IconButton, Subheading, ToggleButton, TouchableRipple } from "@admond/react-native-paper";
import RippleButton from "../../components/RippleButton";
import Loading from "../../components/Loading";
import { PRODUCTS } from "../../utils/constants";
export default function ProductDetail({ route, navigation }) {
    const slug = route.params.slug;
    let url = PRODUCTS + "?slug=" + slug;
    let discount;
    const [value, setValue] = React.useState("left");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const scrollY = new Animated.Value(0);

    const {
        response,
        error,
        status: { isLoading, isResolved, isRejected },
    } = useFetch(url);

    if (isRejected) {
        return (
            <View style={tw`flex justify-center items-center h-full`}>
                <Text>
                    Error ,{url} {error?.message}
                </Text>
            </View>
        );
    }
    if (isLoading) {
        return <Loading />;
    }

    if (response) {
        const { id, price, variations, name, on_sale, description, regular_price, images } = response[0];
        const pictures = images?.map((img) => {
            return { uri: img.src };
        });

        if (regular_price) {
            discount = ((regular_price - price) / regular_price) * 100;
            discount = discount.toFixed(0);
        }

        // image validation choosing 1st image
        const image = images.length <= 0 ? "https://facebook.github.io/react/img/logo_small.png" : images[0].src;

        function handleAddToCart() {
            dispatch(ADD_TO_CART({ product_id: id, variation_id: 0, quantity, images, price, name }));
            Toast.show({
                type: "success",
                text1: "Hello",
                text2: "This is some something ????",
            });
            ToastAndroid.showWithGravity("Product added to cart", ToastAndroid.SHORT, ToastAndroid.CENTER);
        }

        function handleQuantity(value) {
            if (value < 1) setQuantity(1);
            else setQuantity(value);
        }

        return (
            <>
                <Animated.ScrollView
                    style={tw`flex h-full`}
                    scrollEventThrottle={1}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
                >
                    {/* Back button has absoult attribute */}
                    <Button
                        onPress={() => navigation.goBack()}
                        icon={<AntDesign name="leftcircle" size={24} color="orange" />}
                        label="Back"
                        textStyle={`font-bold text-base ml-2 pr-2 shadow text-yellow-600`}
                        style={tw`absolute top-9 left-5 p-1 rounded-full flex justify-center items-center flex-row bg-white z-50 `}
                    />
                    <Button
                        onPress={() => navigation.goBack()}
                        icon={<AntDesign name="heart" size={20} color="orange" />}
                        textStyle={`font-bold text-base ml-2 pr-2 shadow text-yellow-600`}
                        style={tw`absolute top-9 right-5 p-1 rounded-full flex justify-center items-center flex-row bg-white z-50 `}
                    />

                    {/* Image Slider - 1/3 */}
                    {pictures.length > 0 ? (
                        <View style={tw`h-1/3 w-full`}>
                            <SwiperComponent images={pictures} />
                        </View>
                    ) : (
                        <View style={tw`h-1/3 w-full`}>
                            <LottieFile animationData={animationData} message="No picture found" />
                        </View>
                    )}

                    {/* Product Detail */}
                    <View style={tw`h-full p-3 bg-white`}>
                        <RippleButton ripple={10} onPress={() => null}>
                            <Text style={tw.style(`font-bold text-lg text-gray-900 leading-7 `)}>{name}</Text>
                        </RippleButton>

                        {/* Favourite */}
                        <View style={tw`flex flex-row justify-between py-2`}>
                            <View style={tw`flex flex-row`}>
                                <View style={tw`flex flex-row pr-2`}>
                                    <AntDesign name="star" size={18} color="orange" />
                                    <AntDesign name="star" size={18} color="orange" />
                                    <AntDesign name="star" size={18} color="orange" />
                                    <AntDesign name="star" size={18} color="orange" />
                                    <AntDesign name="star" size={18} color="orange" />
                                </View>
                                <Text style={tw`font-bold`}>(20 reviews)</Text>
                            </View>
                            <Text style={tw`font-bold text-gray-400 pr-2 text-sm`}>In Stock</Text>
                        </View>

                        {/* <View style={tw`border-b-2 border-gray-300 pb-2 `} /> */}
                        <Divider style={tw`my-2`} />
                        <View style={tw`flex flex-row justify-between items-center`}>
                            <View style={tw` flex flex-col`}>
                                <Text style={tw`font-bold text-xl text-gray-600 `}>Rs. {price}</Text>
                                <View style={tw` flex flex-row`}>
                                    {on_sale && (
                                        <Text style={tw`font-bold line-through text-base text-gray-500 block`}>Rs. {regular_price}</Text>
                                    )}
                                    {discount >= 1 && (
                                        <Text style={tw`bg-blue-200 p-1 ml-4 text-xs rounded text-blue-800 font-bold`}>
                                            {discount}% OFF
                                        </Text>
                                    )}
                                </View>
                            </View>
                            <View>
                                <View style={tw`flex flex-row items-center`}>
                                    <IconButton icon="plus" size={18} onPress={() => handleQuantity(quantity + 1)} />
                                    <Subheading>{quantity}</Subheading>
                                    <IconButton icon="minus" size={18} onPress={() => handleQuantity(quantity - 1)} />
                                </View>
                            </View>
                        </View>

                        {/* Product Description */}
                        <View style={tw`relative pt-6`}>
                            <Text style={tw`font-bold absolute text-gray-800 text-base w-full pt-2`}>Description</Text>
                            <HTML source={{ html: description }} contentWidth={WIDTH} />
                        </View>

                        {/* Color */}
                        {/* <ToggleButton.Row onValueChange={(value) => setValue(value)} value={value}>
                            <Text style={tw`font-bold text-gray-600 text-lg w-full pt-2`}>Size</Text>

                            <ToggleButton icon="format-align-left" value="left" />
                            <ToggleButton icon="format-align-right" value="right" />
                        </ToggleButton.Row> */}
                    </View>
                </Animated.ScrollView>
                {/* Add to cart button */}
                <View style={tw`p-1 w-full bg-white rounded absolute bottom-0`}>
                    <Button
                        onPress={handleAddToCart}
                        style={tw` p-2 m-2 flex flex-row shadow-sm text-center bg-blue-800 rounded-lg  flex justify-center items-center`}
                        icon={<Icon name="shopping-basket" size={20} color="white" />}
                        label="Add To Cart"
                    />
                </View>
            </>
        );
    }
}
