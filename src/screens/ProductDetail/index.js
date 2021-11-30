import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, ToastAndroid } from "react-native";
import tw from "tailwind-react-native-classnames";
import { WIDTH } from "../../utils/screenSize";
import HTML from "react-native-render-html";
import Icon from "react-native-vector-icons/Entypo";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../../redux/cart/cartSlice";
import useFetch from "../../hooks/useFetch";
import SwiperComponent from "../../components/SwiperComponent";

import Toast from "react-native-toast-message";
import { Divider, IconButton, Subheading, ToggleButton, TouchableRipple } from "@admond/react-native-paper";
import RippleButton from "../../components/RippleButton";
import Loading from "../../components/Loading";
export default function ProductDetail({ route, navigation }) {
    const slug = route.params.slug;
    let url = "/wp-json/wc/v3/products?slug=" + slug;
    let discount;
    const [value, setValue] = React.useState("left");
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    // const response = [
    //     {
    //         id: 1988,
    //         name: "Luxury Type Fashionable Round Shape Magnetive Chain Buckle Blue Colour Watch For Women",
    //         slug: "luxury-type-fashionable-round-shape-magnetive-chain-buckle-blue-colour-watch-for-women",
    //         permalink:
    //             "https://shippr.store/product/luxury-type-fashionable-round-shape-magnetive-chain-buckle-blue-colour-watch-for-women/",
    //         date_created: "2021-11-13T08:05:37",
    //         date_created_gmt: "2021-11-13T08:05:37",
    //         date_modified: "2021-11-13T15:50:22",
    //         date_modified_gmt: "2021-11-13T15:50:22",
    //         type: "simple",
    //         status: "publish",
    //         featured: false,
    //         catalog_visibility: "visible",
    //         description:
    //             "<p>Product details of Luxury Type Fashionable Round Shape Magnetive Chain Buckle Blue Colour Watch For Women<br />\nMovement: Quartz<br />\nDial : Analog<br />\nMaterial: Stainless Steels<br />\nShape : RoundDial<br />\nStrap : Metal Chain<br />\nDial Sixe : 30mm<br />\nCase Diameter: 7mm<br />\nMagnetive Buckle<br />\nChain Length: 21 cm<br />\nNew Fashionable Atractive Midel<br />\nFor Women & Girl</p>\n",
    //         short_description: "",
    //         sku: "XBEPAPA797",
    //         price: "599",
    //         regular_price: "999",
    //         sale_price: "599",
    //         date_on_sale_from: null,
    //         date_on_sale_from_gmt: null,
    //         date_on_sale_to: null,
    //         date_on_sale_to_gmt: null,
    //         on_sale: true,
    //         purchasable: true,
    //         total_sales: 0,
    //         virtual: false,
    //         downloadable: false,
    //         downloads: [],
    //         download_limit: -1,
    //         download_expiry: -1,
    //         external_url: "",
    //         button_text: "",
    //         tax_status: "taxable",
    //         tax_class: "",
    //         manage_stock: false,
    //         stock_quantity: null,
    //         backorders: "no",
    //         backorders_allowed: false,
    //         backordered: false,
    //         low_stock_amount: null,
    //         sold_individually: false,
    //         weight: "",
    //         dimensions: {
    //             length: "",
    //             width: "",
    //             height: "",
    //         },
    //         shipping_required: true,
    //         shipping_taxable: true,
    //         shipping_class: "",
    //         shipping_class_id: 0,
    //         reviews_allowed: true,
    //         average_rating: "0.00",
    //         rating_count: 0,
    //         upsell_ids: [],
    //         cross_sell_ids: [],
    //         parent_id: 0,
    //         purchase_note: "",
    //         categories: [
    //             {
    //                 id: 34,
    //                 name: "Fit Bands",
    //                 slug: "fit-bands",
    //             },
    //             {
    //                 id: 33,
    //                 name: "Smartwatch",
    //                 slug: "smartwatch",
    //             },
    //             {
    //                 id: 32,
    //                 name: "Wearables",
    //                 slug: "wearables",
    //             },
    //         ],
    //         tags: [],
    //         images: [
    //             {
    //                 id: 1987,
    //                 date_created: "2021-11-13T08:05:37",
    //                 date_created_gmt: "2021-11-13T08:05:37",
    //                 date_modified: "2021-11-13T08:05:37",
    //                 date_modified_gmt: "2021-11-13T08:05:37",
    //                 src: "https://shippr.store/wp-content/uploads/2021/11/295dafe68936b6f7aa1e21523dbc844f.jpg_1000x1000q90.jpg",
    //                 name: "295dafe68936b6f7aa1e21523dbc844f.jpg_1000x1000q90.jpg",
    //                 alt: "",
    //             },
    //         ],
    //         attributes: [],
    //         default_attributes: [],
    //         variations: [],
    //         grouped_products: [],
    //         menu_order: 0,
    //         price_html:
    //             '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>999.00</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>599.00</bdi></span></ins>',
    //         related_ids: [1976, 1986, 1984],
    //         meta_data: [],
    //         stock_status: "instock",
    //         _links: {
    //             self: [
    //                 {
    //                     href: "https://shippr.store/wp-json/wc/v3/products/1988",
    //                 },
    //             ],
    //             collection: [
    //                 {
    //                     href: "https://shippr.store/wp-json/wc/v3/products",
    //                 },
    //             ],
    //         },
    //     },
    // ];
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

    if (isResolved || response) {
        // console.log(response);
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
                text2: "This is some something 👋",
            });
            ToastAndroid.showWithGravity("Product added to cart", ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
        function handleQuantity(value) {
            if (value < 1) setQuantity(1);
            else setQuantity(value);
        }

        return (
            <SafeAreaView style={tw`flex h-full bg-blue`}>
                {/* Back button has absoult attribute */}
                <RippleButton
                    onPress={() => navigation.goBack()}
                    style={tw`absolute top-9 left-5 p-1 rounded-full flex justify-center items-center flex-row bg-white z-50 `}
                >
                    <AntDesign name="leftcircle" size={24} color="orange" />
                    <Text style={tw`font-bold text-base ml-2 pr-2 shadow text-yellow-600`}>Back</Text>
                </RippleButton>

                {/* Image Slider */}
                <View style={tw`h-3/5 w-full`}>
                    <SwiperComponent images={pictures} />
                </View>

                {/* Product Detail */}
                <ScrollView style={tw`h-full p-3 bg-white`}>
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

                        <Text style={tw`font-bold text-gray-600 pr-2`}>In Stock</Text>
                    </View>
                    {/* <View style={tw`border-b-2 border-gray-300 pb-2 `} /> */}
                    <Divider style={tw`my-2`} />
                    <View style={tw`flex flex-row justify-between items-center pt-2 `}>
                        <View style={tw` flex flex-col`}>
                            <Text style={tw`font-bold text-xl text-gray-600 `}>Rs. {price}</Text>
                            <View style={tw` flex flex-row`}>
                                {on_sale && (
                                    <Text style={tw`font-bold line-through text-base text-gray-500 block`}>Rs. {regular_price}</Text>
                                )}
                                <Text style={tw`bg-blue-200 p-1 ml-4 text-xs rounded text-blue-800 font-bold`}>{discount}% OFF</Text>
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
                    <ToggleButton.Row onValueChange={(value) => setValue(value)} value={value}>
                        <Text style={tw`font-bold text-gray-600 text-lg w-full pt-2`}>Size</Text>

                        <ToggleButton icon="format-align-left" value="left" />
                        <ToggleButton icon="format-align-right" value="right" />
                    </ToggleButton.Row>
                </ScrollView>

                {/* Add to cart button */}
                <RippleButton
                    onPress={handleAddToCart}
                    style={tw`p-3 m-2 flex flex-row shadow-sm text-center bg-blue-800 rounded-lg  flex justify-center items-center`}
                >
                    <Icon name="shopping-basket" size={20} color="white" />
                    <Text style={tw`font-bold text-base ml-2 text-white shadow `}>Add To Cart</Text>
                </RippleButton>
            </SafeAreaView>
        );
    }
}
