import Sticker from '../model/Sticker';
import example from '../view/example';
import state from '../model/state';

export default function load() {
    example();
    if (!localStorage.getItem('t1')) example();

    for (let i = 1; localStorage.getItem(`t${i}`); i++) {
        const title = localStorage.getItem(`t${i}`);
        const content = localStorage.getItem(`c${i}`);
        const keyWords = localStorage.getItem(`k${i}`);
        const adress = localStorage.getItem(`a${i}`);

        state.add({ title, content, keyWords, adress });
        const sticker = new Sticker(i);
        sticker.toDOM();
        sticker.show();
    }
};