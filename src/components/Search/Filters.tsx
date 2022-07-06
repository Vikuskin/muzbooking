/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    MenuItem,
    FormControl,
    Select,
    TextField,
    Autocomplete,
    Typography,
    Slider,
} from '@mui/material';
import { FiltersWrapper, InputSearch } from 'style/search/searchPage';
import { FiltersProps } from 'types/Search';

export const Filters: React.FC<FiltersProps> = ({
    handleChangeAutoComplete,
    autoComplete,
    handleChangeSort,
    sort,
    rangePrice,
    handleChangeRangePrice,
    maxPrice,
}) => {
    const { t } = useTranslation();

    return (
        <FiltersWrapper>
            <Box sx={{ mb: '15px' }}>
                <Typography sx={{ fontWeight: 'bold' }}>
                    {t('search.searchPage.filtersName')}
                </Typography>
                <Autocomplete
                    disablePortal
                    id='searchName'
                    options={autoComplete}
                    sx={{ minWidth: 200, p: 0 }}
                    onChange={(event: any, newValue: string | null) => {
                        handleChangeAutoComplete(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Box>
            <Box
                sx={{
                    minWidth: 120,
                    margin: 'auto',
                    mb: '15px',
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>
                    {t('search.searchPage.filtersSort.filtersSort')}
                </Typography>
                <FormControl fullWidth sx={{ border: 'none' }}>
                    <Select
                        id='sort'
                        value={sort}
                        onChange={handleChangeSort}
                        input={<InputSearch />}
                    >
                        <MenuItem value='increase price'>
                            {t('search.searchPage.filtersSort.increase')}
                        </MenuItem>
                        <MenuItem value='decrease price'>
                            {t('search.searchPage.filtersSort.decrease')}
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box>
                <Typography sx={{ fontWeight: 'bold' }}>
                    {t('search.searchPage.price')}
                </Typography>
                <Slider
                    value={rangePrice}
                    onChange={handleChangeRangePrice}
                    min={0}
                    max={maxPrice}
                    valueLabelDisplay='auto'
                    sx={{ color: '#f79521' }}
                />
            </Box>
        </FiltersWrapper>
    );
};
