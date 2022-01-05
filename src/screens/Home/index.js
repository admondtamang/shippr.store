import React from "react";
import { ScrollView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { PRODUCTS, STATUS } from "../../utils/constants";
import jsonHome from "../../json/json-home";
import JsonBucket from "../../components/JsonBucket";
// import response from "../response";

// import CustomBottomSheet from "../../components/CustomBottomSheet";
export default function Home() {
    // const image = { uri: "https://i.pinimg.com/originals/a1/78/55/a1785592d41e140f00ef1cf3d9597dcb.png" };

    // const { error, isLoading, status, response } = useFetchQuery("latest", PRODUCTS);
    // console.log("data", error, isLoading, status, response);

    // if (STATUS.loading == status) {
    //     return <Loading />;
    // }

    // if (STATUS.success == status)
    return (
        <ScrollView nestedScrollEnabled={true} style={tw`flex pb-12`}>
            <JsonBucket data={jsonHome} />
            {/* <CustomBottomSheet /> */}
        </ScrollView>
    );
}
