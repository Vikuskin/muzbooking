import { Dispatch } from 'redux';
import { ServicesActionTypes, ServicesAction } from '../reducers/servicesReducer'

export const chooseServices = (id: string) => {
    console.log(id)
    if (id === ServicesActionTypes.PHOTO) {
        return (dispatch: Dispatch<ServicesAction>) => {
            dispatch({type: ServicesActionTypes.PHOTO})
        }
    }
    if (id === ServicesActionTypes.TEACHING) {
        return (dispatch: Dispatch<ServicesAction>) => {
            dispatch({type: ServicesActionTypes.TEACHING})
        }
    }
    if (id === ServicesActionTypes.RECORD) {
        return (dispatch: Dispatch<ServicesAction>) => {
            dispatch({type: ServicesActionTypes.RECORD})
        }
    }
    if (id === ServicesActionTypes.DANCE) {
        return (dispatch: Dispatch<ServicesAction>) => {
            dispatch({type: ServicesActionTypes.DANCE})
        }
    }
}