import { combineReducers } from 'redux';
import { servicesReducer } from 'store/reducers/servicesReducer';
import { dataReducer } from 'store/reducers/dataReducer'

export const rootReducer = combineReducers({
    services: servicesReducer,
    data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
