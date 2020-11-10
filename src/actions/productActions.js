import { FETCH_DATA } from "./actionTypes";
import axios from "../components/axios-instance";

export const fetchData = () => (dispatch) => {
	axios
		.get("photos")
		.then((data) =>
			dispatch({
				type: FETCH_DATA,
				payload: data,
			})
		)
		.catch((err) => console.log(err));
};
