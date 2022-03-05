import { CheckedPlaceDB } from "./Databases";
import { ProductsState, ContentCompanyImages } from "./Cabinet";

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
    _id?: string | undefined;
    nameCompany?: string;
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