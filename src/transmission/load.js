import Sticker from '../singleSticker/Sticker';

export default function load() {
    for (let i = 1; localStorage.getItem(`H${i}`); i++) {
        let sticker = new Sticker(localStorage.getItem(`H${i}`), localStorage.getItem(`C${i}`));
        sticker.create();
        sticker.show();
    }
};