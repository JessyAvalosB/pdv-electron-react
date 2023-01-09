import { paginationTypes } from "../types"

export const setTotalItems = (totalItems) => {
    return {
        type: paginationTypes.SET_PAGINATION_TOTAL_ITEMS,
        payload: totalItems,
    }
}

export const setPage = (page) => {
    return {
        type: paginationTypes.SET_PAGINATION_PAGE,
        payload: page,
    }
}

export const setLimit = (limit) => {
    return {
        type: paginationTypes.SET_PAGINATION_LIMIT,
        payload: limit
    }
}

export const setSiblingCount = (siblingCount) => {
    return {
        type: paginationTypes.SET_PAGINATION_SIBLING_COUNT,
        payload: siblingCount
    }
}