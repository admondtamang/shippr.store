import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { List } from "@admond/react-native-paper";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView } from "react-native-safe-area-context";

const Categories = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);

    const image = {
        uri: "https://www.analyticssteps.com/backend/media/thumbnail/6743613/7557273_1606234814_nyka.jpg",
    };

    return (
        <SafeAreaView>
            <List.Section>
                <List.Accordion style={tw`h-44 bg-blue-200`} image={image}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>

                <List.Accordion style={tw`h-44 bg-blue-200`} image={image}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    },
});

export default Categories;
