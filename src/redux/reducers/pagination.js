import { paginationTypes } from '../types';

const initialState = {
    totalItems: 0,
    limit: 5,
    siblingCount: 1,
    page: 1,
};

const paginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case paginationTypes.SET_PAGINATION_TOTAL_ITEMS:
            return {
                ...state,
                totalItems: action.payload,
            }
        case paginationTypes.SET_PAGINATION_PAGE:
            return {
                ...state,
                page: action.payload,
            }
        case paginationTypes.SET_PAGINATION_LIMIT:
            return {
                ...state,
                limit: action.payload,
            }
        case paginationTypes.SET_PAGINATION_SIBLING_COUNT:
            return {
                ...state,
                siblingCount: action.payload,
            }
        default:
            return state;
    }
}

export default paginationReducer;