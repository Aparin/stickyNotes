import currentData from './currentData.js';

export default function save() {
    const localStickers = currentData();
    localStorage.setItem('stickers', localStickers);
    localStorage.setItem('id', id - 1);
}