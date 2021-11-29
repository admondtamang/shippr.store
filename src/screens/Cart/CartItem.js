import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { IconButton, List, Title, Subheading } from "@admond/react-native-paper";
import styled from "styled-components";
import { DECREASE_CART, INCREASE_CART, REMOVE_FROM_CART } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import RippleButton from "../../components/RippleButton";
import tw from "tailwind-react-native-classnames";
export default function CartItem({ item }) {
    let discount;
    const dispatch = useDispatch();
    if (item.regular_price) {
        discount = ((regular_price - item.price) / regular_price) * 100;
        discount = discount.toFixed(0);
    }
    function handleDelete() {
        dispatch(REMOVE_FROM_CART(item));
        // Toast.show({
        //     text: "Wrong password!",
        //     buttonText: "Okay",
        //     type: "danger",
        // });
    }
    return (
        <RippleButton onPress={() => null} style={tw`flex bg-white p-2 flex-row justify-between rounded mt-4`}>
            <Image source={{ uri: item?.images[0]?.src }} style={tw`w-2/6 rounded`} />
            <Description>
                <Text numberOfLines={2} style={tw`font-bold w-2/5`} onPress={() => {}}>
                    {item.name}
                </Text>
                <View style={tw` flex flex-col`}>
                    <Text style={tw`font-bold text-base text-gray-600 `}>Rs. {item.price}</Text>
                    <View style={tw` flex flex-row`}>
                        {item.on_sale && (
                            <>
                                <Text style={tw`font-bold line-through text-base text-gray-500 block`}>Rs. {item.regular_price}</Text>
                                <Text style={tw`bg-blue-200 p-1 ml-4 text-xs rounded text-blue-800 font-bold`}>{discount}% OFF</Text>
                            </>
                        )}
                    </View>
                </View>
                <View style={tw`flex flex-row items-center mt-5`}>
                    <IconButton icon="plus" size={18} onPress={() => dispatch(INCREASE_CART(item))} />
                    <Subheading>{item.quantity}</Subheading>
                    <IconButton icon="minus" size={18} onPress={() => dispatch(DECREASE_CART(item))} />
                </View>
            </Description>
            <DeleteButton icon="delete" color="red" size={18} onPress={handleDelete} />
        </RippleButton>
    );
}

const DeleteButton = styled(IconButton)`
    position: absolute;
    bottom: 5px;
    right: 10px;
`;

const QuantityContainer = styled(RippleButton)`
    display: flex;
    align-items: center;
    flex-direction: row;
    max-width: 100px;
    /* background-color: lightblue; */
    border-radius: 20px;
    justify-content: flex-start;
`;
const Description = styled(View)`
    flex-grow: 1;
    padding: 0 10px;
`;
