export default function save() {
    for (let id = 1; true; id++) {
        let sticker = document.getElementById(id);
        if (!sticker === false) {
            localStorage.setItem(`H${id}`, sticker.getElementsByTagName('h1')[0].textContent);
            localStorage.setItem(`C${id}`, sticker.getElementsByTagName('p')[0].textContent);
        } else { break; }
    }
}