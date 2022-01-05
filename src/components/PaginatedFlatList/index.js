import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "@admond/react-native-paper";
// import response from "../../screens/response";
import axiosInstance from "../../utils/axios";
import CustomFlatList from "../CustomFlatList";
import ItemList from "../CustomFlatList/ItemList";
import { CATEGORIES, PRODUCTS } from "../../utils/constants";
import Loading from "../Loading";

export default function PaginatedFlatList({ slug, searchUrl }) {
    const numColumns = 2;
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);
    const url = searchUrl || PRODUCTS + `?category=` + slug + `&page=` + page;
    console.log("---", searchUrl, url);
    let oldSlug;

    useEffect(() => getData(), [page, slug]);

    const getData = () => {
        setLoading(true);
        oldSlug != slug && setResponse([]);
        axiosInstance(url)
            .then((res) => {
                setResponse([...response, ...res.data]);
            })
            .catch((error) => {
                console.error(error);
            });
        oldSlug = slug;
        setLoading(false);
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
    if (loading) {
        return <Loading />;
    }

    const renderFooter = () => (
        <Button style={{ marginBottom: 5 }} icon="more" mode="text" onPress={loadMoreData} loading={loading}>
            Load More
        </Button>
    );
    return <CustomFlatList data={response} type={ItemList.product} numColumns={numColumns} ListFooterComponent={renderFooter} />;
}
