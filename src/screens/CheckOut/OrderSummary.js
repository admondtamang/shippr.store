import React from "react";
import { View, Text } from "react-native";
import tw from "tailwind-react-native-classnames";
import { selectCartTotal } from "../../redux/cart/cartSelector";
import { useSelector } from "react-redux";

export default function OrderSummary() {
    const netAmount = useSelector(selectCartTotal);

    const deliveryCharge = 100,
        total = deliveryCharge + netAmount;

    function renderSummaryRow(name, data) {
        if (name == "Total") {
            return (
                <>
                    <View style={tw`h-1 bg-gray-200 my-2`} />
                    <View style={tw`flex  flex-row justify-between `}>
                        <Text style={tw`text-lg text-gray-900 font-bold`}>{name}</Text>
                        <Text style={tw`text-lg text-gray-900 font-bold`}>{data}</Text>
                    </View>
                </>
            );
        } else
            return (
                <View style={tw`flex  flex-row justify-between `}>
                    <Text style={tw`text-lg text-gray-600 font-bold`}>{name}</Text>
                    <Text style={tw`text-lg text-gray-600 font-bold`}>{data}</Text>
                </View>
            );
    }

    return (
        <View style={tw`flex bg-white p-4 mb-1 rounded-lg font-bold`}>
            <Text style={tw`text-xl font-bold mb-4`}>Checkout Summary</Text>
            {renderSummaryRow("Order", netAmount)}
            {renderSummaryRow("Delivery", deliveryCharge)}
            {renderSummaryRow("Total", total)}
        </View>
    );
}
