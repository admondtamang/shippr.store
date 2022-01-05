import React from "react";
import { View } from "react-native";
import Carousel from "../CustomCarosel/Carousel";
import CustomFlatList from "../CustomFlatList";
import ItemList from "../CustomFlatList/ItemList";
import { Feather } from "@expo/vector-icons";
import Banner from "../../screens/Home/Banner";
// import CategoriesHome from "../../screens/Home/CategoriesHome";

// A json placeholder
export default function JsonBucket({ data }) {
    return (
        <View>
            {data.map((ent, index) => {
                switch (ent.type) {
                    /* banner */
                    case jsonType.home_banner:
                        return <Banner key={index} />;
                    /* Featured Products */
                    case jsonType.products_vertical:
                        return (
                            <CustomFlatList
                                key={index}
                                icon={<Feather name={ent.icon} size={24} color={ent.color} />}
                                showViewAll={ent.viewCatPage || null}
                                data={ent.items}
                                type={ItemList.product}
                                title={ent.title}
                                numColumns={2}
                            />
                        );

                    /* Featured Products */
                    case jsonType.products_horizontal:
                        return (
                            <CustomFlatList
                                key={index}
                                icon={<Feather name={ent.icon} size={24} color={ent.color} />}
                                showViewAll={ent.viewCatPage || null}
                                title={ent.title}
                                horizontal
                                data={ent.items}
                                type={ItemList.product}
                                ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                            />
                        );

                    /* Small FlatList */
                    case jsonType.products_horizontal_small:
                        return (
                            <CustomFlatList
                                key={index}
                                icon={<Feather name={ent.icon} size={24} color={ent.color} />}
                                showViewAll={ent.viewCatPage || null}
                                title={ent.title}
                                horizontal
                                data={ent.items}
                                type={ItemList.small_product}
                                ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
                                twFlatListStyle={`mt-1 mb-2`}
                            />
                        );

                    /* Category FLatlist */
                    case jsonType.rounded_category:
                        return (
                            <CustomFlatList
                                twFlatListStyle={ent.style}
                                key={index}
                                horizontal
                                data={ent.items}
                                type={ItemList.categoryRounded}
                                ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                            />
                        );
                    /* Carousel */
                    case jsonType.slider:
                        return <Carousel key={index} data={ent.items} />;

                    /* Categories */
                    case jsonType.category:
                        return (
                            <CustomFlatList
                                icon={<Feather name={ent.icon} size={24} color={ent.color} />}
                                title={ent.title}
                                data={ent.items}
                                type={ItemList.category}
                                numColumns={3}
                            />
                        );

                    // <CategoriesHome categories={ent.items} key={index} />;
                }
            })}
        </View>
    );
}
