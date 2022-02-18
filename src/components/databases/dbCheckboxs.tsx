export interface ServicesPlace {
    name: string,
    id: number
}

export const dbServicesPlace: ServicesPlace[] = [
    {
        name: 'Чай/кофе',
        id: 0,
    },
    {
        name: 'Кофемашина',
        id: 1,
    },
    {
        name: 'Кулер с водой',
        id: 2,
    },
    {
        name: 'Аппарат со снеками',
        id: 3,
    },
    {
        name: 'Кафе на территории',
        id: 4,
    },
];

export interface ComfortPlace {
    name: string,
    id: number
}

export const dbComfortPlace: ComfortPlace[] = [
    {
        name: 'Зона для курения',
        id: 0,
    },
    {
        name: 'Менее 10 мин от метро ',
        id: 1,
    },
    {
        name: 'Бесплатная парковка',
        id: 2,
    },
    {
        name: 'Кондиционер',
        id: 3,
    },
    {
        name: 'Туалет на территории',
        id: 4,
    },
    {
        name: 'Зона отдыха(lounge)',
        id: 5,
    },
    {
        name: 'Wi-Fi Free',
        id: 6,
    },
    {
        name: 'Не нужно переобуваться',
        id: 7,
    },
    {
        name: 'Отдельный вход',
        id: 8,
    },
    {
        name: 'Камера хранения',
        id: 9,
    },
    {
        name: 'Лифт/1 этаж',
        id: 10,
    },
    {
        name: 'Парковка на территории',
        id: 11,
    },
];
