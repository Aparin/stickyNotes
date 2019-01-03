import Sticker from '../model/Sticker';
import example from '../view/example';
import objects from '../model/objects';
import currentId from '../model/currentId';

export default function load() {
    if (!localStorage.getItem('t1')) example();

    for (let i = 1; localStorage.getItem(`t${i}`); i++) {
        const title = localStorage.getItem(`t${i}`);
        const content = localStorage.getItem(`c${i}`);
        const keyWords = localStorage.getItem(`k${i}`);
        const adress = localStorage.getItem(`a${i}`);

        const sticker = new Sticker({ title, content, keyWords, adress });

        sticker.create();
        sticker.toDOM();
        sticker.show();
    }
};