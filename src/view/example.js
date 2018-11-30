import Sticker from '../model/Sticker';

export default function example() {
    const makeSticker = (title, content, type, adress) => {
        const sticker = new Sticker({ title, content, type, adress });
        sticker.create();
        sticker.show();
    }
    makeSticker('Become an expert in JavaScript', 'As soon as posible', 'newSticker');
    makeSticker('Learn React', 'On middle level', 'newSticker');
    makeSticker('Learn Node.JS', 'And develop multi-user services', 'newSticker');
    makeSticker('To find a cool job', 'With good salary', 'newSticker');
    makeSticker('Питер, Фонтанка', '', 'map', 'Питер, Фонтанка');
    makeSticker('ВДНХ на карте', 'Посетить выставку промышленного оборудования (пищевая пром-ть; станки для бахил и т.п.)', 'map', 'Пр-т Мира, 119, Москва');

    const ex = document.getElementById('example');
    ex.remove();
}