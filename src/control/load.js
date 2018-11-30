import Sticker from '../model/Sticker';
import objects from '../model/objects';

export default function load() {
    for (let i = 1; localStorage.getItem(`t${i}`); i++) {
        const title = localStorage.getItem(`t${i}`);
        const content = localStorage.getItem(`c${i}`);
        const keyWords = localStorage.getItem(`k${i}`);
        const sticker = new Sticker({ title, content, keyWords });
        sticker.create();
        sticker.show();
    }
};