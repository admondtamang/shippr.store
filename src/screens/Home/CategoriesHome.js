import React from "react";
import CustomFlatList from "../../components/CustomFlatList";
import { Feather } from "@expo/vector-icons";
import ItemList from "../../components/CustomFlatList/ItemList";
import useFetchQuery from "../../hooks/useFetchQuery";
import { CATEGORIES } from "../../utils/constants";

// const data = [
//     { id: 1, name: "beer", image: require("../../../assets/icons/beer.png") },
//     { id: 1, name: "music", image: require("../../../assets/icons/music.png") },
//     { id: 1, name: "food", image: require("../../../assets/icons/food.png") },
//     { id: 1, name: "Gadget", image: require("../../../assets/icons/electronic.png") },
//     { id: 1, name: "food", image: require("../../../assets/icons/food.png") },
//     { id: 1, name: "Gadget", image: require("../../../assets/icons/electronic.png") },
//     { id: 1, name: "beer", image: require("../../../assets/icons/beer.png") },
//     { id: 1, name: "music", image: require("../../../assets/icons/music.png") },
// ];

const data = [
    {
        id: 98,
        name: "Accessories",
        slug: "accessories",
        parent: 84,
        description: "",
        display: "default",
        image: "https://reactnative.dev/img/tiny_logo.png",
        menu_order: 0,
        count: 0,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/98",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
            up: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/84",
                },
            ],
        },
    },
    {
        id: 78,
        name: "Action camera",
        slug: "action-camera",
        parent: 77,
        description: "",
        display: "default",
        image: null,
        menu_order: 0,
        count: 0,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/78",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
            up: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/77",
                },
            ],
        },
    },
    {
        id: 87,
        name: "All Shirts",
        slug: "all-shirts",
        parent: 85,
        description: "",
        display: "default",
        image: null,
        menu_order: 0,
        count: 0,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/87",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
            up: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/85",
                },
            ],
        },
    },
    {
        id: 92,
        name: "All Shirts",
        slug: "all-shirts-women",
        parent: 86,
        description: "",
        display: "default",
        image: null,
        menu_order: 0,
        count: 0,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/92",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
            up: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/86",
                },
            ],
        },
    },
    {
        id: 68,
        name: "Audio",
        slug: "audio",
        parent: 58,
        description: "",
        display: "default",
        image: null,
        menu_order: 0,
        count: 2,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/68",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
            up: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/58",
                },
            ],
        },
    },
    {
        id: 116,
        name: "Auto Electronics Accessories",
        slug: "auto-electronics-accessories",
        parent: 65,
        description: "",
        display: "default",
        image: null,
        menu_order: 0,
        count: 0,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/116",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
            up: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/65",
                },
            ],
        },
    },
    {
        id: 65,
        name: "Automobiles",
        slug: "automobiles",
        parent: 0,
        description: "",
        display: "default",
        image: null,
        menu_order: 0,
        count: 0,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/65",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
        },
    },
    {
        id: 101,
        name: "Bags",
        slug: "bags",
        parent: 98,
        description: "",
        display: "default",
        image: null,
        menu_order: 0,
        count: 0,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/101",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
            up: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/98",
                },
            ],
        },
    },
    {
        id: 118,
        name: "Biographies",
        slug: "biographies",
        parent: 60,
        description: "",
        display: "default",
        image: null,
        menu_order: 0,
        count: 0,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/118",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
            up: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/60",
                },
            ],
        },
    },
    {
        id: 60,
        name: "Books",
        slug: "books",
        parent: 0,
        description: "",
        display: "default",
        image: null,
        menu_order: 0,
        count: 0,
        _links: {
            self: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories/60",
                },
            ],
            collection: [
                {
                    href: "https://shippr.store/wp-json/wc/v3/products/categories",
                },
            ],
        },
    },
];

export default function CategoriesHome({ categories }) {
    const { error, isLoading, status, response } = useFetchQuery("home_categories", CATEGORIES);
    console.log(response);

    return (
        <CustomFlatList
            icon={<Feather name="file" size={24} color="black" />}
            showViewAll
            data={categories}
            type={ItemList.category}
            title="Explore"
            numColumns={3}
        />
    );
}
