export interface Services {
    img: string,
    title: string,
    icon: string,
    description: string,
    id: string
}

export const dbServices: Services[] = [
    {
        img: 'image/record.png',
        title: 'студии звукозаписи',
        icon: 'image/recordIcon.png',
        description:
            'Специально оборудованные комплексы помещений, предназначенные для производства аудио продукции. В данной сфере можно найти студию в аренду или заказать необходимую услугу, например сведение или мастеринг песни.',
        id: 'RECORD',
    },
    {
        img: 'image/photo.png',
        title: 'фотостудии',
        icon: 'image/photoIcon.png',
        description:
            'Площадки, предназначенные для проведения фото и видео съемок. В данной сфере вы найдете специально оборудованные залы с разным оформлением, которые помогут реализовать любую вашу задумку.',
        id: 'PHOTO',
    },
    {
        img: 'image/teaching.png',
        title: 'школы и педагоги',
        icon: 'image/teachingIcon.png',
        description:
            'В данной сфере собраны преподаватели и учреждения, занимающиеся обучением творческим дисциплинам. Вы сможете найти педагога по вокалу, звукорежиссуре, живописи, фотографии и иным творческим направлениям.',
        id: 'TEACHING',
    },
    {
        img: 'image/dancing.png',
        title: 'танцевальные залы',
        icon: 'image/dancingIcon.png',
        description:
            'Залы специально оборудованы для занятий любыми танцевальными направлениями. В сфере собраны разноразмерные залы, которые подойдут как для репетиций больших коллективов, так и для индивидуальных занятий.',
        id: 'DANCE',
    },
];
