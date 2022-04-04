import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useActions } from 'hooks/useActions';
import { FormModal, ButtonPrimary } from 'style/otherStyles';
import { ClientState, FormBookingModalProps } from 'types/Search';

export const FormBookingModal: React.FC<FormBookingModalProps> = ({
    idPlace,
    booking,
    namePlatform,
    idPlatform,
}) => {
    const { t } = useTranslation();
    const { postBooking, fetchCatalogPlace } = useActions();
    const [client, setClient] = useState<ClientState>({
        name: '',
        comment: '',
        phone: '',
    });
    const handleChange =
        (prop: keyof ClientState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setClient({ ...client, [prop]: event.target.value });
        };

    return (
        <Box>
            <FormModal>
                <TextField
                    id='filled-textarea'
                    label={t('search.bookingModal.formName')}
                    placeholder={t('search.bookingModal.formName')}
                    multiline
                    required
                    variant='filled'
                    value={client.name}
                    onChange={handleChange('name')}
                />
                <TextField
                    id='filled-multiline-static'
                    label={t('search.bookingModal.formComment')}
                    multiline
                    placeholder={t('search.bookingModal.formComment')}
                    rows={4}
                    variant='filled'
                    value={client.comment}
                    onChange={handleChange('comment')}
                />
                <TextField
                    id='filled-textarea'
                    label={t('search.bookingModal.formPhone')}
                    placeholder={t('search.bookingModal.formPhone')}
                    multiline
                    required
                    variant='filled'
                    value={client.phone}
                    onChange={(event) => {
                        setClient({
                            ...client,
                            phone: event.target.value
                                .replace(/\D/g, '')
                                .replace(/^[0-9]/, '+7'),
                        });
                    }}
                />
            </FormModal>
            <ButtonPrimary
                onClick={() => {
                    if (client.phone.length !== 12) {
                        alert(t('cabinet.contentPage.mainInfo.alert.phone'));
                        return;
                    }
                    postBooking(
                        idPlace,
                        booking.date,
                        booking.time,
                        booking.chooseProduct,
                        namePlatform,
                        idPlatform,
                        booking.price,
                        client.name,
                        client.comment,
                        client.phone
                    );
                    alert(t('search.bookingModal.alert.success'));
                    fetchCatalogPlace(idPlace);
                }}
            >
                {t('search.bookingModal.buttonForm')}
            </ButtonPrimary>
        </Box>
    );
};
