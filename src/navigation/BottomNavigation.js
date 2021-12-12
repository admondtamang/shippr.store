import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import User from "../screens/User";
import Home from "../screens/Home";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Offers from "../screens/Offers";
import Categories from "../screens/Categories";
import Cart from "../screens/Cart";
import { TouchableRipple } from "@admond/react-native-paper";
import CategoryDetail from "../screens/CategoryDetail";
import Icon from "react-native-vector-icons/Entypo";
import RippleButton from "../components/RippleButton";
import { Dimensions, View, Animated, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { useRef } from "react";
import { BlurView } from "expo-blur";
// import Animated from "react-native-reanimated";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <>
            <Animated.View
                style={[
                    tw` h-4 bg-blue-400 absolute bottom-10 z-50 rounded`,
                    { width: getWidth(), transform: [{ translateX: tabOffsetValue }] },
                ]}
            />
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarStyle: {
                        position: "absolute",
                        padding: 5,
                        paddingBottom: 5,
                        height: 55,
                    },
                    // tabBarBackground: () => <BlurView tint="light" intensity={0} />,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused, size }) => (
                            <TouchableRipple
                                accessibilityTraits="button"
                                accessibilityComponentType="button"
                                accessibilityRole="button"
                                delayPressIn={0}
                                borderless
                                rippleColor="rgba(0, 0, 0, .32)"
                            >
                                <Icon name="home" containerStyle={{ marginTop: focused ? 18 : 6 }} color={color} size={size} />
                            </TouchableRipple>
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: 0,
                                useNativeDriver: true,
                            }).start();
                        },
                    })}
                />
                <Tab.Screen
                    name="Offers"
                    component={Offers}
                    options={{
                        tabBarLabel: "Offers",
                        tabBarIcon: ({ color, focused, size }) => (
                            <Icon name="megaphone" containerStyle={{ marginTop: focused ? 18 : 6 }} color={color} size={size} />
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 1.3,
                                useNativeDriver: true,
                            }).start();
                        },
                    })}
                />
                <Tab.Screen
                    name="Categories"
                    component={Categories}
                    options={{
                        headerShown: false,
                        // tabBarLabel: "",
                        // tabBarLabel: "Categories",
                        tabBarIcon: ({ color, focused, size }) => (
                            <Icon
                                name="grid"
                                containerStyle={{ paddingTop: focused ? 18 : 6 }}
                                color={color}
                                size={34}
                                // size={focused ? size + 14 : size}
                            />
                        ),
                        // <TouchableOpacity style={tw`pb-10 `}>
                        // <View style={tw`bg-blue-600 rounded-full flex justify-center items-center w-14 h-14`}>
                        // </View>
                        // </TouchableOpacity>
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 2.5,
                                useNativeDriver: true,
                            }).start();
                        },
                    })}
                />
                <Tab.Screen
                    name="CategoryDetail"
                    component={CategoryDetail}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Detail",
                        tabBarIcon: ({ color, focused, size }) => (
                            <Icon name="magnifying-glass" containerStyle={{ marginTop: focused ? 18 : 6 }} color={color} size={size} />
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 3.8,
                                useNativeDriver: true,
                            }).start();
                        },
                    })}
                />

                <Tab.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        headerShown: false,

                        title: "Cart",
                        tabBarBadge: cartItems.length,
                        tabBarLabel: "Cart",
                        tabBarIcon: ({ color, focused, size }) => (
                            <Icon name="shopping-bag" containerStyle={{ marginTop: focused ? 18 : 6 }} color={color} size={size} />
                        ),
                    }}
                    listeners={({ navigation, route }) => ({
                        tabPress: (e) => {
                            Animated.spring(tabOffsetValue, {
                                toValue: getWidth() * 5,
                                useNativeDriver: true,
                            }).start();
                        },
                    })}
                />
            </Tab.Navigator>
        </>
    );
};

function getWidth() {
    let width = Dimensions.get("window").width;
    width = width - 70;
    return width / 5;
}
export default BottomNavigation;
