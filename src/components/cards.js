'use strict';

const newYork = new URL('../images/new_york.jpg', import.meta.url);
const sochi = new URL('../images/sochi.jpg', import.meta.url);
const zurih = new URL('../images/zurich.jpg', import.meta.url);
const moscow = new URL('../images/moscow.jpg', import.meta.url);
const london = new URL('../images/london.jpg', import.meta.url);
const liezen = new URL('../images/liezen.jpg', import.meta.url);

export const initialCards = [
    {
    name: 'Нью-Йорк',
    link: newYork,
    },
    {
        name: 'Сочи',
        link: sochi,
    },
    {
        name: 'Цюрих',
        link: zurih,
    },
    {
        name: 'Москва',
        link: moscow,
    },
    {
        name: 'Лондон',
        link: london,
    },
    {
        name: 'Лиезен',
        link: liezen,
    }
];