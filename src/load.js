import listener from './listener';
import editSticker from './editSticker';
import mouseOverOut from './mouseOverOut';
import deleteSticker from './deleteSticker';

function load() {
    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', localStorage.getItem('stickers'));

    for (let id = 1; true; id++) {
        var sticker = document.getElementById(id);
        if (!sticker === false) {
            listener(id, "dblclick", editSticker(id));
            mouseOverOut(id);
            let del = sticker.getElementsByTagName('img');
            del[0].addEventListener('click', function() {
                deleteSticker(id);
            });
        } else { break; }
    }

};

export { load };