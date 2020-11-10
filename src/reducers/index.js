import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import productsReducer from "./productsReducer";

export default combineReducers({
	home: homeReducer,
	products: productsReducer,
});
