import { useEffect } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../utils/axios";

/**
 *
 * @param {*} queryName key for storing
 * @param {*} url addresss for request
 * @param {*} options axios properities
 * @returns {resopnse, error,isLoading, status}
 */
const useFetchQuery = (queryName, url, options) => {
    const { isLoading, error, data, status } = useQuery(queryName, () =>
        axiosInstance
            .get(url, { ...options })
            .then((res) => res.data)
            .catch((error) => console.log(error))
    );
    console.log(url);
    useEffect(() => {}, [url, status]);

    return {
        response: data,
        error,
        isLoading,
        status,
    };
};

export default useFetchQuery;
