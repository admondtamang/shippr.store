import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import styled from "styled-components";
import { Badge, Surface } from "react-native-paper";

export default function Product({ item }) {
    const navigation = useNavigation();

    var discount;
    const { id, name, price, regular_price, images, on_sale, slug } = item;

    // Navigate productdetail page
    const onPress = () => {
        navigation.navigate("ProductDetail", {
            slug,
        });
    };

    // Calculate discount price
    if (regular_price) {
        discount = ((regular_price - price) / regular_price) * 100;
        discount = discount.toFixed(0);
    }

    // image validation choosing 1st image
    let image;
    if (typeof images == "object") {
        image = images?.length > 0 ? "https://facebook.github.io/react/img/logo_small.png" : images[0].src;
    }

    // Styled Component
    const Container = styled.TouchableOpacity`
        width: ${(props) => (props.column ? "140px" : "180px")};
        position: relative;
        background-color: white;
        padding-left: 7px;
        padding-right: 7px;
        padding-top: 7px;
        border-radius: 5px;
        margin-bottom: 15px;
    `;
    const StyledBadge = styled(Badge)`
        background-color: lightblue;
        color: blue;
        position: absolute;
        top: 5;
        right: 5;
    `;

    return (
        <Container onPress={onPress} style={tw`white rounded mr-2`}>
            <Image
                source={{
                    uri: images?.length > 0 ? images[0]?.src : image,
                }}
                style={tw`w-full h-48 rounded-lg`}
            />

            <Text numberOfLines={1} style={tw`w-full my-1 text-sm mt-3`}>
                {name}
            </Text>
            <Text style={tw`font-bold text-lg w-full`}>
                <Text style={tw`font-bold text-sm text-gray-500`}>NRS.</Text>
                {price}
                {on_sale && <Text style={tw`line-through text-sm text-red-300 pl-2`}>{regular_price}</Text>}
            </Text>
            {discount != 0 && <StyledBadge>-{discount}%</StyledBadge>}
        </Container>
    );
}
