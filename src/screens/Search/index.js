import React, { useEffect } from "react";
import { Searchbar } from "@admond/react-native-paper";
import SafeContainer from "../../components/Containers/SafeContainer";
import tw from "tailwind-react-native-classnames";
import { Text, View } from "react-native";
import Tag from "../../components/Tag";
import Carousel from "../../components/CustomCarosel/Carousel";
import CustomFlatList from "../../components/CustomFlatList";
import ItemList from "../../components/CustomFlatList/ItemList";
import { PRODUCTS, STATUS } from "../../utils/constants";
import useFetchQuery from "../../hooks/useFetchQuery";
import Loading from "../../components/Loading";
import { ScrollView } from "react-native-gesture-handler";

export default function Search() {
    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    const onPressTags = (query) => {
        setSearchQuery(query);
    };
    let URL = PRODUCTS + "?per_page=4&orderby=popularity&search=" + searchQuery;

    const { error, isLoading, status, response } = useFetchQuery("search", URL);

    if (isLoading) {
        return <Loading />;
    }

    const dummyData = [
        {
            title: "Classic Black Guitar",
            url: "https://www.wallpapertip.com/wmimgs/15-154362_black-guitar-photos-wallpapers-guitar-wallpaper-hd.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 1,
        },
        {
            title: "Acoustic Guitar",
            url: "https://wallpaperaccess.com/full/3560410.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 2,
        },
        {
            title: "Electric Guitar",
            url: "https://wallpaperboat.com/wp-content/uploads/2019/04/electric-guitar-001.jpg",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            id: 3,
        },
    ];

    return (
        <SafeContainer style={tw`mx-2 my-2`}>
            <Searchbar placeholder="Search products" onChangeText={onChangeSearch} value={searchQuery} />
            <ScrollView>
                {STATUS.success == status && (
                    <CustomFlatList
                        // icon={<Feather name="watch" size={24} color="black" />}
                        ListHeaderComponent={
                            <>
                                <View style={tw`flex flex-row mb-3`}>
                                    <Tag onPressTags={onPressTags} label="All" />
                                    <Tag onPressTags={onPressTags} label="Jordan" />
                                    <Tag onPressTags={onPressTags} label="Medicine" />
                                </View>
                                <Carousel data={dummyData} noDot={true} />
                                <Text style={tw`text-lg font-bold p-2`}>Suggestion</Text>
                            </>
                        }
                        // ListFooterComponent={<Carousel style={tw`pb-10`} data={dummyData} noDot={true} />}
                        data={response}
                        type={ItemList.product}
                        showsHorizontalScrollIndicator={false}
                        style={tw`pb-32 pt-2`}
                        numColumns={2}
                    />
                )}
            </ScrollView>
        </SafeContainer>
    );
}
