import React from "react";
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
export default function ProductDetail({ route, navigation }) {
    const slug = route.params.slug;
    let url = "/wp-json/wc/v3/products?slug=" + slug;

    const dispatch = useDispatch();

    const response = [
        {
            id: 1988,
            name: "Luxury Type Fashionable Round Shape Magnetive Chain Buckle Blue Colour Watch For Women",
            slug: "luxury-type-fashionable-round-shape-magnetive-chain-buckle-blue-colour-watch-for-women",
            permalink:
                "https://shippr.store/product/luxury-type-fashionable-round-shape-magnetive-chain-buckle-blue-colour-watch-for-women/",
            date_created: "2021-11-13T08:05:37",
            date_created_gmt: "2021-11-13T08:05:37",
            date_modified: "2021-11-13T15:50:22",
            date_modified_gmt: "2021-11-13T15:50:22",
            type: "simple",
            status: "publish",
            featured: false,
            catalog_visibility: "visible",
            description:
                "<p>Product details of Luxury Type Fashionable Round Shape Magnetive Chain Buckle Blue Colour Watch For Women<br />\nMovement: Quartz<br />\nDial : Analog<br />\nMaterial: Stainless Steels<br />\nShape : RoundDial<br />\nStrap : Metal Chain<br />\nDial Sixe : 30mm<br />\nCase Diameter: 7mm<br />\nMagnetive Buckle<br />\nChain Length: 21 cm<br />\nNew Fashionable Atractive Midel<br />\nFor Women & Girl</p>\n",
            short_description: "",
            sku: "XBEPAPA797",
            price: "599",
            regular_price: "999",
            sale_price: "599",
            date_on_sale_from: null,
            date_on_sale_from_gmt: null,
            date_on_sale_to: null,
            date_on_sale_to_gmt: null,
            on_sale: true,
            purchasable: true,
            total_sales: 0,
            virtual: false,
            downloadable: false,
            downloads: [],
            download_limit: -1,
            download_expiry: -1,
            external_url: "",
            button_text: "",
            tax_status: "taxable",
            tax_class: "",
            manage_stock: false,
            stock_quantity: null,
            backorders: "no",
            backorders_allowed: false,
            backordered: false,
            low_stock_amount: null,
            sold_individually: false,
            weight: "",
            dimensions: {
                length: "",
                width: "",
                height: "",
            },
            shipping_required: true,
            shipping_taxable: true,
            shipping_class: "",
            shipping_class_id: 0,
            reviews_allowed: true,
            average_rating: "0.00",
            rating_count: 0,
            upsell_ids: [],
            cross_sell_ids: [],
            parent_id: 0,
            purchase_note: "",
            categories: [
                {
                    id: 34,
                    name: "Fit Bands",
                    slug: "fit-bands",
                },
                {
                    id: 33,
                    name: "Smartwatch",
                    slug: "smartwatch",
                },
                {
                    id: 32,
                    name: "Wearables",
                    slug: "wearables",
                },
            ],
            tags: [],
            images: [
                {
                    id: 1987,
                    date_created: "2021-11-13T08:05:37",
                    date_created_gmt: "2021-11-13T08:05:37",
                    date_modified: "2021-11-13T08:05:37",
                    date_modified_gmt: "2021-11-13T08:05:37",
                    src: "https://shippr.store/wp-content/uploads/2021/11/295dafe68936b6f7aa1e21523dbc844f.jpg_1000x1000q90.jpg",
                    name: "295dafe68936b6f7aa1e21523dbc844f.jpg_1000x1000q90.jpg",
                    alt: "",
                },
            ],
            attributes: [],
            default_attributes: [],
            variations: [],
            grouped_products: [],
            menu_order: 0,
            price_html:
                '<del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>999.00</bdi></span></del> <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#8360;</span>599.00</bdi></span></ins>',
            related_ids: [1976, 1986, 1984],
            meta_data: [],
            stock_status: "instock",
            _links: {
                self: [
                    {
                        href: "https://shippr.store/wp-json/wc/v3/products/1988",
                    },
                ],
                collection: [
                    {
                        href: "https://shippr.store/wp-json/wc/v3/products",
                    },
                ],
            },
        },
    ];
    const {
        // response,
        error,
        status: { isLoading, isResolved, isRejected },
    } = useFetch(url);

    // if (isRejected) {
    //     return <Text>Error , {error?.message}</Text>;
    // }
    // if (isLoading) {
    //     return (
    //         <View style={tw`flex justify-center`}>
    //             <Text>Loading</Text>
    //         </View>
    //     );
    // }

    if (isResolved || response) {
        console.log(response);
        const { id, price, variations, name, on_sale, description, regular_price, images } = response[0];
        const pictures = images?.map((img) => {
            return { uri: img.src };
        });

        function handleAddToCart() {
            dispatch(ADD_TO_CART({ product_id: id, variation_id: 0, quantity: 1, images, price, name }));
            Toast.show({
                type: "success",
                text1: "Hello",
                text2: "This is some something 👋",
            });
            ToastAndroid.showWithGravity("Product added to cart", ToastAndroid.SHORT, ToastAndroid.CENTER);
        }

        return (
            <SafeAreaView style={tw`flex h-full bg-blue`}>
                {/* Back button has absoult attribute */}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={tw`absolute top-9 left-5 p-1 rounded-full flex justify-center items-center flex-row bg-white z-50 `}
                >
                    <AntDesign name="leftcircle" size={24} color="orange" />
                    <Text style={tw`font-bold text-base ml-2 pr-2 shadow text-yellow-600`}>Back</Text>
                </TouchableOpacity>

                {/* Image Slider */}
                <View style={tw`h-2/5 w-full`}>
                    <SwiperComponent images={pictures} />
                </View>

                {/* Product Detail */}
                <ScrollView style={tw`h-full  p-3`}>
                    <Text style={tw`font-bold text-lg text-gray-900 leading-8`}>{name}</Text>
                    <Text style={tw`font-bold text-xl w-full pt-2 `}>
                        <Text style={tw`font-bold text-sm text-gray-500`}>NRS.</Text>
                        {price}
                        {on_sale && <Text style={tw`line-through text-sm text-red-300 pl-2`}>{regular_price}</Text>}
                    </Text>

                    <HTML containerStyle={{ marginTop: 0 }} source={{ html: description }} contentWidth={WIDTH} />
                </ScrollView>

                {/* Add to cart button */}
                <TouchableOpacity
                    onPress={handleAddToCart}
                    style={tw`w-full static my-2 py-2 flex flex-row shadow-sm text-center bg-yellow-100 rounded-xl mt-4 flex justify-center items-center`}
                >
                    <Icon name="shopping-basket" size={20} color="orange" />
                    <Text style={tw`font-bold text-base ml-2 shadow text-yellow-600`}>Add To Cart</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}
