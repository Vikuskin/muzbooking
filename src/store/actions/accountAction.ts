/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import { Dispatch } from 'redux';
import { AccountAction, AccountActionTypes } from '../reducers/accountReducer';

export const fetchLogin = (email: string, password: string) => {
    return async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({ type: AccountActionTypes.FETCH_USERS });
            const response = await axios.get('http://localhost:5000/login', {
                params: { email, password },
            });
            dispatch({
                type: AccountActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data,
            });
            localStorage.setItem('token', response.data.token);
            window.setTimeout(() => {
                window.location.replace('http://localhost:3000/account');
            }, 2000);
        } catch (e) {
            dispatch({
                type: AccountActionTypes.FETCH_USERS_ERROR,
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
    subway: string,
    description: string
) => {
    return async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({ type: AccountActionTypes.FETCH_USERS });
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
                    description,
                }
            );
            dispatch({
                type: AccountActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data,
            });
            window.setTimeout(() => {
                window.location.replace('http://localhost:3000/login');
            }, 2000);
        } catch (e) {
            dispatch({
                type: AccountActionTypes.FETCH_USERS_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };
};

export const fetchAccountContent = (token: string) => {
    return async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({ type: AccountActionTypes.FETCH_USERS });
            const response = await axios.get('http://localhost:5000/account', {
                headers: { Authorization: `Bearer ${token}` },
            });
            dispatch({
                type: AccountActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: AccountActionTypes.FETCH_USERS_ERROR,
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
    description: string
) => {
    return async (dispatch: Dispatch<AccountAction>) => {
        try {
            dispatch({ type: AccountActionTypes.FETCH_USERS });
            const response = await axios.put('http://localhost:5000/account', {
                city: city,
                nameCompany: nameCompany,
                phone: phone,
                sphera: sphera,
                address: address,
                subway: subway,
                description: description,
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            dispatch({
                type: AccountActionTypes.FETCH_USERS_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: AccountActionTypes.FETCH_USERS_ERROR,
                payload: e.response.data.message,
            });
            return e.response.data.message;
        }
    };
};
