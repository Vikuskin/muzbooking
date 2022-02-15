interface ServicesState {
    services: string;
}

export enum ServicesActionTypes {
    RECORD = 'RECORD',
    PHOTO = 'PHOTO',
    TEACHING = 'TEACHING',
    DANCE = 'DANCE',
}
export interface ServicesAction {
    type: string;
}

const initialState: ServicesState = {
    services: '',
};

export const servicesReducer = (
    state = initialState, action: ServicesAction
): ServicesState => {
    switch (action.type) {
        case ServicesActionTypes.DANCE:
            return { services: 'DANCE' };
        case ServicesActionTypes.PHOTO:
            return { services: 'PHOTO' };
        case ServicesActionTypes.RECORD:
            return { services: 'RECORD' };
        case ServicesActionTypes.TEACHING:
            return { services: 'TEACHING' };
        default:
            return state;
    }
};
