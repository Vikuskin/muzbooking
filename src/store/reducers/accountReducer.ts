export interface AccountState {
    data: any[];
    loading: boolean;
    error: any;
}

export enum AccountActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

export interface FetchUsersAction {
    type: AccountActionTypes.FETCH_USERS;
}

export interface FetchUsersSuccessAction {
    type: AccountActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

export interface FetchUsersErrorAction {
    type: AccountActionTypes.FETCH_USERS_ERROR;
    payload: any;
}

export type AccountAction =
    | FetchUsersAction
    | FetchUsersErrorAction
    | FetchUsersSuccessAction;

const initialState: AccountState = {
    data: [],
    loading: false,
    error: null,
};

export const accountReducer = (
    state = initialState,
    action: AccountAction
): AccountState => {
    switch (action.type) {
        case AccountActionTypes.FETCH_USERS:
            return { loading: true, error: null, data: [] };
        case AccountActionTypes.FETCH_USERS_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case AccountActionTypes.FETCH_USERS_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};
