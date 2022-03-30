import React from 'react';
import { useTranslation } from 'react-i18next';
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
}) => {
    const { t } = useTranslation();

    return (
        <FormModal key={_id}>
            {TextFieldModal(namePlatform, t('cabinet.calendar.namePlatform'))}
            {TextFieldModal(product, t('cabinet.calendar.service'))}
            {TextFieldModal(price, t('cabinet.calendar.price'))}
            {TextFieldModal(time, t('cabinet.calendar.time'))}
            {TextFieldModal(date, t('cabinet.calendar.date'))}
            {TextFieldModal(nameClient, t('cabinet.calendar.nameClient'))}
            {TextFieldModal(phone, t('cabinet.calendar.phone'))}
            {comment ? (
                <TextField
                    id='filled-multiline-static'
                    label={t('cabinet.calendar.comment')}
                    multiline
                    rows={4}
                    variant='filled'
                    value={comment}
                    disabled
                />
            ) : null}
        </FormModal>
    );
};
