import React from 'react';
import { TextField } from '@material-ui/core';
import { BookingState } from 'types/Cabinet';
import { FormModal, TextFieldModal } from 'style/otherStyles';

export const CalendarModal: React.FC<BookingState> = ({
    namePlatform,
    nameClient,
    phone,
    price,
    product,
    time,
    _id,
    date,
    comment,
}) => (
    <FormModal key={_id}>
        {TextFieldModal(namePlatform, 'Площадка')}
        {TextFieldModal(product, 'Выбранная услуга')}
        {TextFieldModal(price, 'Цена')}
        {TextFieldModal(time, 'Время')}
        {TextFieldModal(date, 'Дата')}
        {TextFieldModal(nameClient, 'Имя клиента')}
        {TextFieldModal(phone, 'Телефон')}
        {comment ? <TextField
            id="filled-multiline-static"
            label="Комментарий к заказу"
            multiline
            rows={4}
            variant="filled"
            value={comment}
            disabled
        /> : null}
    </FormModal>
);
