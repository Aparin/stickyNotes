import { out } from './out';

function save() {
    let localStickers = '';
    for (let i = 1; true; i++) {
        let sticker = document.getElementById(i);
        if (!sticker === false) {
            localStickers += sticker.outerHTML;
        } else { break; }
    }
    // console.log(localStickers);
    localStorage.stickers = localStickers;
}
export { save };