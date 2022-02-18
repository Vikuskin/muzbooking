import { combineReducers } from 'redux';
import { servicesReducer } from 'store/reducers/servicesReducer';
import { accountReducer } from 'store/reducers/accountReducer'

export const rootReducer = combineReducers({
    services: servicesReducer,
    account: accountReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
