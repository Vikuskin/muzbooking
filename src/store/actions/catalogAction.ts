import axios from 'axios';
import { Dispatch } from 'redux';
import { DataAction, DataActionTypes } from 'store/reducers/dataReducer';
import { path } from 'enum';

export const fetchCatalogPlace =
    (id: string) => async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.get(path.SERVER_URL + path.Catalog, {
                params: { id },
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
