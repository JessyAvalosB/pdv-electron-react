import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setProducts } from "../redux/actions/products";
import { setTotalItems } from "../redux/actions/pagination";
import { getPaginationConfig } from "../redux/selectors/pagination";
import { getProducts } from "../axios requests/products";

export const useFetchProducts = () => {
    const dispatch = useDispatch();
    const { page, limit } = useSelector(getPaginationConfig);

    useEffect(() => {
        let isSubscribed = true;
        if (isSubscribed) {
            setProductsData(page, limit);
        }
        return () => isSubscribed = false;
    }, [page, limit]);

    const setProductsData = async (page, limit) => {
        const { results, totalItems } = await getProducts({ page, limit });
        dispatch(setProducts(results));
        dispatch(setTotalItems(totalItems));
    };
};