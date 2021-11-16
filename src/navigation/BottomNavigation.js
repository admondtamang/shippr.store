import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import User from "../screens/User";
import Home from "../screens/Home";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import Offers from "../screens/Offers";
import ProductDetail from "../screens/ProductDetail";
import Cart from "../screens/Cart";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    // const cartItems = useSelector((state) => state.cart.cartItems);
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                indicatorStyle: {
                    height: 0,
                    backgroundColor: "transparent",
                },
                tabStyle: {
                    height: 45,
                    paddingVertical: 5,
                },
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
                    tabBarIcon: ({ color, size }) => <AntDesign name="home" containerStyle={{ marginTop: 6 }} color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Search"
                component={ProductDetail}
                options={{
                    headerShown: false,
                    tabBarLabel: "Search",
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
                    // tabBarBadge: cartItems.length,
                    tabBarLabel: "Cart",
                    tabBarIcon: ({ color, size }) => <AntDesign name="shoppingcart" size={size} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomNavigation;
