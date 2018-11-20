import makeMapSticker from '../singleSticker/makeMapSticker';
import Sticker from '../singleSticker/Sticker';

export default function example() {
    const makeSticker = (title, content, type) => {
        const sticker = new Sticker(title, content, type);
        sticker.create();
        sticker.show();
    }
    makeSticker('Become an expert in JavaScript', 'As soon as posible', 'newSticker');
    makeSticker('Learn React', 'On middle level', 'newSticker');
    makeSticker('Learn Node.JS', 'And develop multi-user services', 'newSticker');
    makeSticker('To find a cool job', 'With good salary', 'newSticker');
    makeMapSticker('ВДНХ на карте', 'Посетить выставку промышленного оборудования (пищевая пром-ть; станки для бахил и т.п.)', 'editMapSticker', 'Пр-т Мира, 119, Москва');

    const ex = document.getElementById('example');
    ex.remove();
}