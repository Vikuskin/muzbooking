import * as ServicesAction from 'store/actions/servicesAction';
import * as AccountAction from 'store/actions/accountAction';
import * as SearchAction from 'store/actions/searchActions';
import * as CatalogAction from 'store/actions/catalogAction';

export default {
    ...ServicesAction,
    ...AccountAction,
    ...SearchAction,
    ...CatalogAction,
};
