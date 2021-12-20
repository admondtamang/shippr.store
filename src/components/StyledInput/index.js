import React from "react";
import { View, Text, TextInput } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function StyledInput({ label, icon, formikProps, formikKey, ...rest }) {
    return (
        <View style={tw`mb-2`}>
            {/* <Text style={{ marginBottom: 3 }}>{label}</Text> */}
            <TextInput
                style={tw`p-2 bg-gray-100 rounded-lg`}
                onChangeText={formikProps.handleChange(formikKey)}
                onBlur={formikProps.handleBlur(formikKey)}
                {...rest}
            />
            {formikProps.touched[formikKey] && formikProps.errors[formikKey] && (
                <Text style={tw`text-red-400`}>{formikProps.touched[formikKey] && formikProps.errors[formikKey]}</Text>
            )}
        </View>
    );
}
