import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomFlatList from "../../components/CustomFlatList";
import ItemList from "../../components/CustomFlatList/ItemList";
import PaginatedFlatList from "../../components/PaginatedFlatList";
import response from "../response";
export default function CategoryDetail() {
    return (
        <SafeAreaView>
            <PaginatedFlatList />
        </SafeAreaView>
    );
}
