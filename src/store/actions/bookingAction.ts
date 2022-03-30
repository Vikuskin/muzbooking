import axios from 'axios';
import { Dispatch } from 'redux';
import { DataAction, DataActionTypes } from 'store/reducers/dataReducer';
import {
    BookingDataAction,
    BookingDataActionTypes,
} from 'store/reducers/bookingReducer';
import { path } from 'enum';

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
            const response = await axios.post(path.SERVER_URL + path.Booking, {
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
            return response.data;
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };

export const getBooking =
    (idPlatform: string, selectProduct: string) =>
    async (dispatch: Dispatch<BookingDataAction>) => {
        try {
            dispatch({ type: BookingDataActionTypes.FETCH_BOOKING_DATA });
            const response = await axios.get(path.SERVER_URL + path.Booking, {
                params: { idPlatform, selectProduct },
            });
            dispatch({
                type: BookingDataActionTypes.FETCH_BOOKING_DATA_SUCCESS,
                payload: response.data,
            });
            return response.data;
        } catch (e) {
            dispatch({
                type: BookingDataActionTypes.FETCH_BOOKING_DATA_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };
