import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PaginatedFlatList from "../../components/PaginatedFlatList";

export default function CategoryDetail({ route }) {
    // const { error, isLoading, status, response } = useFetchQuery(CATEGORIES, CATEGORIES);
    const slug = route?.params?.id || 65;

    console.log(slug);
    return (
        <SafeAreaView>
            <PaginatedFlatList slug={slug} />
        </SafeAreaView>
    );
}
