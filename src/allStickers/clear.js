export default function clear() {

    for (var id = 1; true; id++) {
        let sticker = document.getElementById(id);
        if (!sticker === false) {
            sticker.remove();
        } else { break; }
    }

    localStorage.clear();
}