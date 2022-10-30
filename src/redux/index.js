import { combineReducers } from "redux";
import products from './reducers/products';
import alerts from "./reducers/alerts";

const rootReducer = combineReducers({
    products: products,
    alerts: alerts,
});

export default rootReducer;