export default function save() {
    let localStickers = '';
    for (var id = 1; true; id++) {
        let sticker = document.getElementById(id);
        if (!sticker === false) {
            localStickers += sticker.outerHTML;
        } else { break; }
    }

    localStorage.setItem('stickers', localStickers);
    localStorage.setItem('id', id - 1);
}