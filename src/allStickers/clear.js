import out from '../out';

export default function clear() {
    if (confirm("Удалить без возможности восстановления?")) {

        for (var id = 1; true; id++) {
            let sticker = document.getElementById(id);
            if (!sticker === false) {
                sticker.remove();
            } else { break; }
        }

        localStorage.clear();
    }
}