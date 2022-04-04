import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
    YMaps,
    Map,
    ObjectManager,
    ObjectManagerFeatures,
} from 'react-yandex-maps';
import { MapWrapper } from 'style/search/searchPage';
import { CardPlaceProps, YandexMapProps } from 'types/Search';
import axios from 'axios';

export const YandexMap: React.FC<YandexMapProps> = ({ data, mapState }) => {
    const { t } = useTranslation();
    const coords: ObjectManagerFeatures = [];
    const getCoordinate = async (city: string, address: string) => {
        try {
            const response = await axios.get(
                `https://catalog.api.2gis.com/3.0/items/geocode?q=${city}, ${address}, 3&fields=items.point,items.geometry.centroid&key=ruxutq4755`
            );
            return response.data;
        } catch (e) {
            return e.response;
        }
    };

    if (data[0]) {
        data.forEach(async (item: CardPlaceProps) => {
            const result = await getCoordinate(item.city, item.address);
            coords.push({
                type: 'Feature',
                id: item._id,
                geometry: {
                    type: 'Point',
                    coordinates: [
                        result.result.items[0].point.lat,
                        result.result.items[0].point.lon,
                    ],
                },
                properties: {
                    balloonContentHeader: `<font size=3><b>${item.nameCompany}</b></font>`,
                    balloonContentBody: `<p>${item.address}</p>${item.subway}<p></p><p></p>`,
                    balloonContentFooter: `<font size=1>${item.price}</font>`,
                    hintContent: `<strong>${item.nameCompany}</strong>`,
                },
            });
        });
    }

    return (
        <MapWrapper>
            {mapState ? (
                <YMaps>
                    <Map
                        defaultState={{
                            center: [59.935413, 30.331365],
                            zoom: 9,
                        }}
                        width='100%'
                        height='100%'
                    >
                        <ObjectManager
                            options={{
                                clusterize: true,
                                gridSize: 32,
                                clusterDisableClickZoom: true,
                            }}
                            objects={{
                                preset: 'islands#greenDotIcon',
                            }}
                            clusters={{
                                preset: 'islands#greenClusterIcons',
                            }}
                            features={coords}
                            modules={[
                                'objectManager.addon.objectsBalloon',
                                'objectManager.addon.objectsHint',
                            ]}
                        />
                    </Map>
                </YMaps>
            ) : (
                <Box>{t('loading')}</Box>
            )}
        </MapWrapper>
    );
};
