import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Button, FlatList, Text } from "react-native";

export default function Cart({ navigation }) {
    const [count, setCount] = React.useState(0);

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
                        ListHeaderComponent={<Text style={{ fontWeight: "bold" }}>Shopping Bag</Text>}
                        showsVerticalScrollIndicator={false}
                        data={cartItems}
                        numColumns={1}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                    <Button
                        title="Proceed To Checkout"
                        style={{ marginTop: 20 }}
                        mode="contained"
                        onPress={() => navigation.navigate("Checkout")}
                    />
                </>
            )}
        </SafeAreaView>
    );
}
