import listener from './listener';
import editSticker from './editSticker';
import mouseOverOut from './mouseOverOut';
import addDeleteSign from './addDeleteSign';

function load() {
    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', localStorage.getItem('stickers'));

    for (let id = 1; true; id++) {
        var sticker = document.getElementById(id);
        if (!sticker === false) {
            listener(id, "dblclick", editSticker(id));
            mouseOverOut(id);
            addDeleteSign(id);
        } else { break; }
    }

};

export { load };