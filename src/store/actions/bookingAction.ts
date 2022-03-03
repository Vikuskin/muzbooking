/* eslint-disable consistent-return */
import axios from 'axios';
import { Dispatch } from 'redux';
import { DataAction, DataActionTypes } from '../reducers/dataReducer';

export const postBooking =
    (
        idPlace: string,
        date: string,
        time: string,
        chooseProduct: string,
        namePlatform: string,
        idPlatform: string,
        price: string,
        name: string,
        comment: string,
        phone: string
    ) =>
    async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.post('http://localhost:5000/booking', {
                idPlace,
                date,
                time,
                chooseProduct,
                namePlatform,
                idPlatform,
                price,
                name,
                comment,
                phone,
            });
            dispatch({
                type: DataActionTypes.FETCH_DATA_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };
