import { TouchableRipple } from "@admond/react-native-paper";
import React from "react";

export default function RippleButton({ children, ripple, ...rest }) {
    if (!ripple) {
        ripple = 32;
    }
    return (
        <TouchableRipple
            accessibilityTraits="button"
            accessibilityComponentType="button"
            accessibilityRole="button"
            delayPressIn={0}
            borderless
            rippleColor={`rgba(0, 0, 0, .${ripple})`}
            {...rest}
        >
            <>{children}</>
        </TouchableRipple>
    );
}
