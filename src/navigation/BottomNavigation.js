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
import { BlurView } from "expo-blur";
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarStyle: {
                    position: "absolute",
                    padding: 5,
                    height: 45,
                },
                headerStyle: {
                    height: 90, // Specify the height of your custom header
                },
                // tabBarBackground: () => <BlurView tint="light" intensity={0} />,
            }}

            // tabBarOptions={{
            //     padding: 5,
            //     // height: 45,
            //     // activeTintColor: Colors.secondary,
            // }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <TouchableRipple
                            accessibilityTraits="button"
                            accessibilityComponentType="button"
                            accessibilityRole="button"
                            delayPressIn={0}
                            borderless
                            rippleColor="rgba(0, 0, 0, .32)"
                        >
                            <AntDesign name="home" containerStyle={{ marginTop: 6 }} color={color} size={size} />
                        </TouchableRipple>
                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={Categories}
                options={{
                    headerShown: false,
                    tabBarLabel: "Categories",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign containerStyle={{ marginTop: 6 }} name="antdesign" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="CategoryDetail"
                component={CategoryDetail}
                options={{
                    headerShown: false,
                    tabBarLabel: "Detail",
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign containerStyle={{ marginTop: 6 }} name="search1" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Offers"
                component={Offers}
                options={{
                    tabBarLabel: "Offers",
                    tabBarIcon: ({ color, size }) => <AntDesign name="isv" size={size} color={color} />,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false,

                    title: "Cart",
                    tabBarBadge: cartItems.length,
                    tabBarLabel: "Cart",
                    tabBarIcon: ({ color, size }) => <AntDesign name="shoppingcart" size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigation;
