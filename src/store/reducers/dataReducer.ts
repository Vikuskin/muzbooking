export interface DataState {
    data: any;
    loading: boolean;
    error: string | null;
}

export enum DataActionTypes {
    FETCH_DATA = 'FETCH_DATA',
    FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
    FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
}

export interface FetchDataAction {
    type: DataActionTypes.FETCH_DATA;
}

export interface FetchDataSuccessAction {
    type: DataActionTypes.FETCH_DATA_SUCCESS;
    payload: any[];
}

export interface FetchDataErrorAction {
    type: DataActionTypes.FETCH_DATA_ERROR;
    payload: any;
}

export type DataAction =
    | FetchDataAction
    | FetchDataErrorAction
    | FetchDataSuccessAction;

const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
};

export const dataReducer = (
    state = initialState,
    action: DataAction
): DataState => {
    switch (action.type) {
        case DataActionTypes.FETCH_DATA:
            return { loading: true, error: null, data: [] };
        case DataActionTypes.FETCH_DATA_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case DataActionTypes.FETCH_DATA_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};
