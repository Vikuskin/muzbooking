import { SelectChangeEvent } from '@mui/material';
import { CheckedPlaceDB } from './Databases';
import { ProductsState, ContentCompanyImages } from './Cabinet';

export interface CatalogPlatformCardProps {
    idPlace: string;
    idPlatform: string;
    namePlatform: string;
    nameCompany: string;
    square: string;
    rider: string;
    comfort: Array<CheckedPlaceDB>;
    services: Array<CheckedPlaceDB>;
    images: Array<ContentCompanyImages>;
    products: Array<ProductsState>;
}

export interface CardPlaceProps {
    images: string[];
    title: string;
    address: string;
    subway: string;
    timetable: string;
    price: number;
    _id: string;
    nameCompany?: string;
    city: string;
}

export interface BookingModalProps {
    idPlace: string;
    idPlatform: string;
    nameCompany: string;
    namePlatform: string;
    products: Array<ProductsState>;
}

export interface BookingState {
    date: string;
    time: string;
    chooseProduct: string;
    price: string;
}

export interface ClientState {
    name: string;
    comment: string;
    phone: string;
}

export interface YandexMapProps {
    data: Array<CardPlaceProps>;
    mapState: boolean;
}

export interface FiltersProps {
    handleChangeAutoComplete: (newValue: string | null) => void;
    autoComplete: Array<string>;
    handleChangeSort: (event: SelectChangeEvent) => void;
    sort: string;
    rangePrice: Array<number>;
    handleChangeRangePrice: (event: Event, newValue: number | number[]) => void;
    maxPrice: number;
}

export interface TitleInfoProps {
    nameCompany: string;
    namePlatform: string;
    handleChangeSelectProduct: (event: SelectChangeEvent) => void;
    booking: BookingState;
    products: ProductsState[];
    clientWindow: boolean;
    showClientWindow: () => void;
    hideClientWindow: () => void;
}

export interface FormBookingModalProps {
    idPlace: string;
    booking: BookingState;
    namePlatform: string;
    idPlatform: string;
}
