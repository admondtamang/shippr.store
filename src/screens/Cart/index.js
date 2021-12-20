import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Button, FlatList, Text } from "react-native";
import { Searchbar } from "@admond/react-native-paper";
import FullHeightWithButton from "../../components/Containers/FullHeightWithButton";

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
                <FullHeightWithButton onPress={() => navigation.navigate("Checkout")} buttonTitle="Procced To Checkout">
                    <FlatList
                        ListHeaderComponent={<Searchbar placeholder="Search" onChangeText={onChangeSearch} value={searchQuery} />}
                        showsVerticalScrollIndicator={false}
                        data={cartItems}
                        numColumns={1}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                </FullHeightWithButton>
            )}
        </SafeAreaView>
    );
}
