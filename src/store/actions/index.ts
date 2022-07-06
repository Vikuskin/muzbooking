import * as ServicesAction from 'store/actions/servicesAction';
import * as AccountAction from 'store/actions/accountAction';
import * as SearchAction from 'store/actions/searchActions';
import * as CatalogAction from 'store/actions/catalogAction';
import * as BookingAction from 'store/actions/bookingAction';

export default {
    ...ServicesAction,
    ...AccountAction,
    ...SearchAction,
    ...CatalogAction,
    ...BookingAction,
};
