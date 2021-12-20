import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
import { Title, Button, ActivityIndicator, Checkbox } from "@admond/react-native-paper";
import StyledInput from "../../components/StyledInput";
import { Formik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { selectCartTotal } from "../../redux/cart/cartSelector";
import { EMPTY_CART } from "../../redux/cart/cartSlice";
import tw from "tailwind-react-native-classnames";

// import { postPlaceOrder } from "../../api/checkout";

export default function CheckOutScreen({ navigation }) {
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.cartItems);

    const [checked, setChecked] = useState(false);
    const deliveryCharge = 100,
        total = deliveryCharge + selectCartTotal;

    const SignupSchema = Yup.object().shape({
        first_name: Yup.string().required(),
        email: Yup.string().email(),
        address1: Yup.string().required(),
        city: Yup.string(),
        phone: Yup.number().required(),
    });

    if (cartItems.length <= 0) {
        navigation.navigate("Home");
    }

    const onSubmit = async (values, actions) => {
        try {
            actions.setSubmitting(false);
            const order = {
                payment_method: "bacs",
                payment_method_title: "Cash on delivery",
                billing: values,
                line_items: cartItems.map(({ product_id, quantity }) => {
                    return { product_id, quantity };
                }),
                shipping_lines: [
                    {
                        method_id: "flat_rate",
                        method_title: "Flat Rate",
                        total: "100.00",
                    },
                ],
            };

            // await postPlaceOrder(order);
            dispatch(EMPTY_CART());

            // dispatch(EMPTY_CART());
            navigation.navigate("OrderPlaced");
        } catch (error) {
            console.log(error);
            actions.setFieldError("general", error.message);
        }
    };

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
        <View style={tw`flex h-full`}>
            <Formik
                initialValues={{ first_name: "Testing", city: "sakl", email: "ad@gf.com", phone: "1", address1: "a2" }}
                validationSchema={SignupSchema}
                onSubmit={onSubmit}
            >
                {(formikProps) => (
                    <>
                        <ScrollView>
                            {/* Form Fields */}
                            <View style={tw`flex bg-white p-4 m-3 rounded-lg font-bold`}>
                                <Text style={tw`text-xl font-bold mb-4`}>User Detail</Text>

                                <StyledInput label="Full Name" formikProps={formikProps} formikKey="first_name" placeholder="Full Name" />
                                <StyledInput label="Address1" formikProps={formikProps} formikKey="address_1" placeholder="Address" />
                                <StyledInput label="City" formikProps={formikProps} formikKey="city" placeholder="City" />
                                <StyledInput label="Email" formikProps={formikProps} formikKey="email" placeholder="Email (Optional)" />
                                <StyledInput label="Phone" formikProps={formikProps} formikKey="phone" placeholder="Phone" />

                                <View style={tw`flex flex-row items-center`}>
                                    <Checkbox
                                        status={checked ? "checked" : "unchecked"}
                                        onPress={() => {
                                            setChecked(!checked);
                                        }}
                                    />
                                    <Text style={tw`text-gray-800`}>Accept our terms and policy.</Text>
                                </View>

                                <Text style={tw`text-red-400`}>{formikProps.errors.general}</Text>
                            </View>

                            {/* Order Summary */}
                            <View style={tw`flex bg-white p-4 m-3 rounded-lg font-bold`}>
                                <Text style={tw`text-xl font-bold mb-4`}>Checkout Summary</Text>
                                {renderSummaryRow("Order", selectCartTotal)}
                                {renderSummaryRow("Delivery", deliveryCharge)}
                                {renderSummaryRow("Total", deliveryCharge)}
                            </View>
                            {/* <pre>{JSON.stringify(formikProps, null, 2)}</pre> */}
                            {/* <Text>{JSON.stringify(formikProps, null, 2)}</Text> */}
                        </ScrollView>
                        <View style={tw`p-1 w-full bg-white rounded absolute bottom-0`}>
                            <Button
                                mode="contained"
                                style={tw`p-2 m-2 flex flex-row shadow-sm text-center bg-blue-800 rounded-lg  flex justify-center items-center`}
                                loading={formikProps.isSubmitting}
                                onPress={formikProps.handleSubmit}
                            >
                                Checkout
                            </Button>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
}
