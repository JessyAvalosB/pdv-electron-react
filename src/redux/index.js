import { combineReducers } from "redux";
import productReducer from './reducers/products';
import alertReducer from "./reducers/alerts";
import paginationReducer from "./reducers/pagination";

const rootReducer = combineReducers({
    products: productReducer,
    alerts: alertReducer,
    pagination: paginationReducer,
});

export default rootReducer;