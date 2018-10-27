export default function currentData() {
    let localStickers = '';
    let id;
    for (id = 1; true; id++) {
        let sticker = document.getElementById(id);
        if (!sticker === false) {
            localStickers += sticker.outerHTML;
        } else { break; }
    }
    return localStickers;
}