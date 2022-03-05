
import axios from 'axios';
import { Dispatch } from 'redux';
import { DataAction, DataActionTypes } from '../reducers/dataReducer';

export const fetchPlaces =
    (sphera: string) => async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.get('http://localhost:5000/search', {
                params: { sphera },
            });
            dispatch({
                type: DataActionTypes.FETCH_DATA_SUCCESS,
                payload: response.data,
            });
            return response.data;
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };
