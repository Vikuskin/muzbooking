import axios from 'axios';
import { Dispatch } from 'redux';
import { ContentCompanyImages, ProductsState } from 'types/Cabinet';
import { CheckedPlaceDB } from 'types/Databases';
import { DataAction, DataActionTypes } from 'store/reducers/dataReducer';

export const fetchLogin =
    (email: string, password: string) =>
    async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.get('http://localhost:5000/login', {
                params: { email, password },
            });
            dispatch({
                type: DataActionTypes.FETCH_DATA_SUCCESS,
                payload: response.data,
            });
            localStorage.setItem('token', response.data.token);
            window.setTimeout(() => {
                window.location.replace('http://localhost:3000/account');
            }, 2000);
            return response.data.message;
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };

export const fetchRegistration =
    (
        city: string,
        email: string,
        nameCompany: string,
        password: string,
        phone: string[][],
        sphera: string,
        address: string,
        subway: string
    ) =>
    async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.post(
                'http://localhost:5000/registration',
                {
                    city,
                    email,
                    nameCompany,
                    password,
                    phone,
                    sphera,
                    address,
                    subway,
                }
            );
            dispatch({
                type: DataActionTypes.FETCH_DATA_SUCCESS,
                payload: response.data,
            });
            window.setTimeout(() => {
                window.location.replace('http://localhost:3000/login');
            }, 2000);
            return response.data.message;
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };

export const fetchAccountContent =
    (token: string) => async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.get('http://localhost:5000/account', {
                headers: { Authorization: `Bearer ${token}` },
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

export const fetchAccountContentUpdate =
    (
        token: string,
        city: string,
        nameCompany: string,
        phone: string[][],
        sphera: string,
        address: string,
        subway: string,
        description: string,
        timetable: string,
        price: number
    ) =>
    async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.put(
                'http://localhost:5000/account',
                {
                    city,
                    nameCompany,
                    phone,
                    sphera,
                    address,
                    subway,
                    description,
                    timetable,
                    price,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
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

export const fetchAccountPlatform =
    (
        token: string,
        name: string,
        square: string,
        rider: string,
        products: Array<ProductsState>,
        services: Array<CheckedPlaceDB>,
        comfort: Array<CheckedPlaceDB>,
        idPlatform: string,
        files: Array<ContentCompanyImages>
    ) =>
    async (dispatch: Dispatch<DataAction>) => {
        const data = new FormData();
        files.forEach((file: any) => {
            data.append('images', file);
        });
        data.append('name', name);
        data.append('square', square);
        data.append('rider', rider);
        data.append('products', JSON.stringify(products));
        data.append('services', JSON.stringify(services));
        data.append('comfort', JSON.stringify(comfort));
        data.append('idPlatform', idPlatform);
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.post(
                'http://localhost:5000/account',
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
            dispatch({
                type: DataActionTypes.FETCH_DATA_SUCCESS,
                payload: response.data,
            });
            return response.data;
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response,
            });
            return e.response;
        }
    };

export const fetchAccountPlatformDelete =
    (token: string, id: string) => async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.delete(
                'http://localhost:5000/account',
                {
                    data: { token, id },
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
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

export const fetchOrders =
    (token: string) => async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.get(
                'http://localhost:5000/account/orders',
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
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

export const fetchCalendar =
    (token: string, date: string) => async (dispatch: Dispatch<DataAction>) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` },
                params: { date },
            };
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.get(
                'http://localhost:5000/account/calendar',
                config
            );
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
