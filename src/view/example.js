import Sticker from '../model/Sticker';

export default function example() {
    const makeSticker = (title, content, keyWords, adress) => {
        const sticker = new Sticker({ title, content, keyWords, adress });
        sticker.create();
        sticker.show();
    }
    makeSticker('Become an expert in JavaScript', 'As soon as posible', 'учёба');
    makeSticker('Learn React', 'On middle level', 'учёба');
    makeSticker('Learn Node.JS', 'And develop multi-user services', 'учёба');
    makeSticker('To find a cool job', 'With good salary', 'деньги');
    makeSticker('Питер, Фонтанка', '', 'путешествия', 'Питер, Фонтанка');
    makeSticker('ВДНХ на карте', 'Посетить выставку промышленного оборудования (пищевая пром-ть; станки для бахил и т.п.)', 'деньги', 'Пр-т Мира, 119, Москва');

    const ex = document.getElementById('example');
    ex.remove();
}