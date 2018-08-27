import { movingTheDiv } from './movingTheDiv';
import { editSticker } from './editSticker';


function load() {
    document.getElementById('stickyNotes').innerHTML += localStorage.stickers;

    for (let i = 1; true; i++) {
        var sticker = document.getElementById(i);
        if (!sticker === false) {
            movingTheDiv(i);
            //editSticker(i);
        } else { break; }
    }

};

export { load };