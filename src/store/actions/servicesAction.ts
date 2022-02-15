import { Dispatch } from 'redux';
import {
    ServicesActionTypes,
    ServicesAction,
} from 'store/reducers/servicesReducer';

export const chooseServices = (id: string) => {
    if (id === ServicesActionTypes.PHOTO) {
        return (dispatch: Dispatch<ServicesAction>) => {
            dispatch({ type: ServicesActionTypes.PHOTO });
        };
    }
    if (id === ServicesActionTypes.TEACHING) {
        return (dispatch: Dispatch<ServicesAction>) => {
            dispatch({ type: ServicesActionTypes.TEACHING });
        };
    }
    if (id === ServicesActionTypes.RECORD) {
        return (dispatch: Dispatch<ServicesAction>) => {
            dispatch({ type: ServicesActionTypes.RECORD });
        };
    }
    if (id === ServicesActionTypes.DANCE) {
        return (dispatch: Dispatch<ServicesAction>) => {
            dispatch({ type: ServicesActionTypes.DANCE });
        };
    }
    return null
};
