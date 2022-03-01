/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import { Dispatch } from 'redux';
import { DataAction, DataActionTypes } from '../reducers/dataReducer';

export const fetchLogin = (email: string, password: string) => {
    return async (dispatch: Dispatch<DataAction>) => {
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
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };
};

export const fetchRegistration = (
    city: string,
    email: string,
    nameCompany: string,
    password: string,
    phone: string[][],
    sphera: string,
    address: string,
    subway: string
) => {
    return async (dispatch: Dispatch<DataAction>) => {
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
                    subway
                }
            );
            dispatch({
                type: DataActionTypes.FETCH_DATA_SUCCESS,
                payload: response.data,
            });
            window.setTimeout(() => {
                window.location.replace('http://localhost:3000/login');
            }, 2000);
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };
};

export const fetchAccountContent = (token: string) => {
    return async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.get('http://localhost:5000/account', {
                headers: { Authorization: `Bearer ${token}` },
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
};

export const fetchAccountContentUpdate = (
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
) => {
    return async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.put(
                'http://localhost:5000/account',
                {
                    city: city,
                    nameCompany: nameCompany,
                    phone: phone,
                    sphera: sphera,
                    address: address,
                    subway: subway,
                    description: description,
                    timetable: timetable,
                    price: price,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            dispatch({
                type: DataActionTypes.FETCH_DATA_SUCCESS,
                payload: response.data,
            });
            return response.data
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };
};

export const fetchAccountPlatform = (
    token: string,
    name: string,
    square: string,
    rider: string,
    products: any[],
    services: any[],
    comfort: any[],
    idPlatform: string,
    files: any
) => {
    return async (dispatch: Dispatch<DataAction>) => {
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
        console.log(data)
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.post(
                'http://localhost:5000/account',
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                }
            );
            dispatch({
                type: DataActionTypes.FETCH_DATA_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: DataActionTypes.FETCH_DATA_ERROR,
                payload: e.response,
            });
            return e.response;
        }
    };
};

export const fetchAccountPlatformDelete = (token: string, id: string) => {
    return async (dispatch: Dispatch<DataAction>) => {
        try {
            dispatch({ type: DataActionTypes.FETCH_DATA });
            const response = await axios.delete(
                'http://localhost:5000/account',
                {
                    data: { token: token, id: id },
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
};
