import listener from './listener';
import editSticker from './editSticker';

function load() {
    document.getElementById('stickyNotes').innerHTML += localStorage.stickers;

    for (let id = 1; true; id++) {
        var sticker = document.getElementById(id);
        if (!sticker === false) {
            listener(id, "dblclick", editSticker(id));
        } else { break; }
    }

};

export { load };