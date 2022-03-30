import React from 'react';
import { CheckedPlaceDB } from './Databases';

export interface RegistrationState {
    email: string;
    password: string;
    phone: string[][];
    nameCompany: string;
    city: string;
    sphera: string;
    address: string;
    subway: string;
}

export interface LoginState {
    email: string;
    password: string;
    showPassword: boolean;
}

export interface ContentPageMainInfoProps {
    sphera: string;
    nameCompany: string;
    city: string;
    address: string;
    phone: string[][];
    subway: string;
    email: string;
    description: string;
    timetable: string;
    price: number;
}

export interface PlatformState {
    namePlatform: string;
    square: string;
    rider: string;
    products: Array<ProductsState>;
}

export interface ProductsState {
    id: string;
    name: string;
    price: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
}

export interface ContentPagePlatformProps {
    namePlatform: string;
    square: string;
    rider: string;
    products: Array<ProductsState>;
    services: Array<CheckedPlaceDB>;
    comfort: Array<CheckedPlaceDB>;
    _id: string;
    images: Array<ContentCompanyImages>;
}

export interface ContentCompanyImages {
    destination: string;
    encoding: string;
    fieldname: string;
    filename: string;
    mimetype: string;
    originalname: string;
    path: string;
    size: number;
    preview?: string | undefined;
    name?: string | undefined;
}

export interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number
    ) => void;
}

export interface BookingState {
    namePlatform: string;
    nameClient: string;
    phone: string;
    price: string;
    product: string;
    time: string;
    _id: string;
    date: string;
    comment: string;
}
