import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Button, FlatList, Text, View } from "react-native";
import RippleButton from "../../components/RippleButton";
import Icon from "react-native-vector-icons/Entypo";
import tw from "tailwind-react-native-classnames";
import { Searchbar } from "@admond/react-native-paper";

export default function Cart({ navigation }) {
    const [count, setCount] = React.useState(0);
    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => <Button onPress={() => setCount((c) => c + 1)} title="Update count" />,
        });
    }, [navigation]);

    const cartItems = useSelector((state) => state.cart.cartItems);

    const renderItem = ({ item }) => <CartItem item={item} />;

    return (
        <SafeAreaView style={{ padding: 10 }}>
            {cartItems.length === 0 ? (
                // <LottieFile animationData={animated} loop={false} />
                <Text>No Cart Found</Text>
            ) : (
                <>
                    <FlatList
                        ListHeaderComponent={<Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />}
                        showsVerticalScrollIndicator={false}
                        data={cartItems}
                        numColumns={1}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                    <RippleButton
                        onPress={() => navigation.navigate("Checkout")}
                        style={tw`p-3 my-2 flex flex-row shadow-sm text-center bg-blue-800 rounded-lg  flex justify-center items-center`}
                    >
                        <Icon name="shopping-basket" size={20} color="white" />
                        <Text style={tw`font-bold text-base ml-2 text-white shadow `}>Procced To Checkout</Text>
                    </RippleButton>
                </>
            )}
        </SafeAreaView>
    );
}
