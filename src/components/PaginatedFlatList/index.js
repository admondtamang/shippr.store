import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "@admond/react-native-paper";
// import response from "../../screens/response";
import axiosInstance from "../../utils/axios";
import CustomFlatList from "../CustomFlatList";
import ItemList from "../CustomFlatList/ItemList";

export default function PaginatedFlatList() {
    const numColumns = 2;
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);
    const url = `wp-json/wc/v3/products?page=` + page + "&orderby=popularity";
    const offset = 5;

    useEffect(() => getData(), [page]);

    const getData = () => {
        setLoading(true);
        axiosInstance(url)
            .then((res) => {
                setResponse([...response, ...res.data]);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error(error);
            });
    };

    // Add empty colum at the end of row
    const formatData = (data, numColumns) => {
        const dataList = data;
        const totalRows = Math.floor(dataList?.length / numColumns);
        let totalLasttRow = dataList.length - totalRows * numColumns;
        while (totalLasttRow !== 0 && totalLasttRow !== numColumns) {
            dataList.push({ name: "blank", empty: true });
            totalLasttRow++;
        }
        return dataList;
    };

    const showEmptyListView = () => {
        return (
            <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "black" }}>{"No Data to Display"}</Text>
            </View>
        );
    };

    const renderItem = ({ item }) => {
        if (item.empty) {
            return <View style={{ backgroundColor: "transparent" }} />;
        }
        return <Product productHeight={WIDTH / numColumns} item={item} />;
    };
    const loadMoreData = () => {
        setPage((prev) => page + 1);
    };

    const renderFooter = () => (
        <Button style={{ marginBottom: 40 }} icon="more" mode="text" onPress={loadMoreData} loading={loading}>
            Load More
        </Button>
    );
    return <CustomFlatList data={response} type={ItemList.product} numColumns={numColumns} ListFooterComponent={renderFooter} />;
}
