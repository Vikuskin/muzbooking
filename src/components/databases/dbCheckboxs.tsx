export interface CheckedPlace {
    value: string;
    id: number;
    checked: boolean;
}

export const dbServicesPlace: CheckedPlace[] = [
    {
        value: 'Чай/кофе',
        id: 0,
        checked: false,
    },
    {
        value: 'Кофемашина',
        id: 1,
        checked: false,
    },
    {
        value: 'Кулер с водой',
        id: 2,
        checked: false,
    },
    {
        value: 'Аппарат со снеками',
        id: 3,
        checked: false,
    },
    {
        value: 'Кафе на территории',
        id: 4,
        checked: false,
    },
];

export const dbComfortPlace: CheckedPlace[] = [
    {
        value: 'Зона для курения',
        id: 0,
        checked: false,
    },
    {
        value: 'Менее 10 мин от метро ',
        id: 1,
        checked: false,
    },
    {
        value: 'Бесплатная парковка',
        id: 2,
        checked: false,
    },
    {
        value: 'Кондиционер',
        id: 3,
        checked: false,
    },
    {
        value: 'Туалет на территории',
        id: 4,
        checked: false,
    },
    {
        value: 'Зона отдыха(lounge)',
        id: 5,
        checked: false,
    },
    {
        value: 'Wi-Fi Free',
        id: 6,
        checked: false,
    },
    {
        value: 'Не нужно переобуваться',
        id: 7,
        checked: false,
    },
    {
        value: 'Отдельный вход',
        id: 8,
        checked: false,
    },
    {
        value: 'Камера хранения',
        id: 9,
        checked: false,
    },
    {
        value: 'Лифт/1 этаж',
        id: 10,
        checked: false,
    },
    {
        value: 'Парковка на территории',
        id: 11,
        checked: false,
    },
];
