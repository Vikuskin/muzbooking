export interface BookingDataState {
    bookingData: any;
    loading: boolean;
    error: string | null;
}

export enum BookingDataActionTypes {
    FETCH_BOOKING_DATA = 'FETCH_BOOKING_DATA',
    FETCH_BOOKING_DATA_SUCCESS = 'FETCH_BOOKING_DATA_SUCCESS',
    FETCH_BOOKING_DATA_ERROR = 'FETCH_BOOKING_DATA_ERROR',
}

export interface FetchBookingDataAction {
    type: BookingDataActionTypes.FETCH_BOOKING_DATA;
}

export interface FetchBookingDataSuccessAction {
    type: BookingDataActionTypes.FETCH_BOOKING_DATA_SUCCESS;
    payload: any[];
}

export interface FetchBookingDataErrorAction {
    type: BookingDataActionTypes.FETCH_BOOKING_DATA_ERROR;
    payload: any;
}

export type BookingDataAction =
    | FetchBookingDataAction
    | FetchBookingDataErrorAction
    | FetchBookingDataSuccessAction;

const initialState: BookingDataState = {
    bookingData: [],
    loading: false,
    error: null,
};

export const bookingDataReducer = (
    state = initialState,
    action: BookingDataAction
): BookingDataState => {
    switch (action.type) {
        case BookingDataActionTypes.FETCH_BOOKING_DATA:
            return { loading: true, error: null, bookingData: [] };
        case BookingDataActionTypes.FETCH_BOOKING_DATA_SUCCESS:
            return { loading: false, error: null, bookingData: action.payload };
        case BookingDataActionTypes.FETCH_BOOKING_DATA_ERROR:
            return { loading: false, error: action.payload, bookingData: [] };
        default:
            return state;
    }
};
