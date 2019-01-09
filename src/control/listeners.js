import Sticker from '../model/Sticker';
import save from './save';
import deleteSticker from '../view/deleteSticker';
import clear from './clear';
import editSticker from '../view/editSticker/editSticker';
// import editMapSticker from '../view/_editMapSticker';
import currentId from '../model/currentId';
import state from '../model/state';

export default function listeners() {
    plus.onclick = function() {
        const id = currentId();
        const sticker = new Sticker(id);
        state.add({ title: '', content: '', keyWords: '' });
        sticker.toDOM();
        sticker.full();
    }
    plusMap.onclick = function() {
        const id = currentId();
        const sticker = new Sticker(id);
        state.add({ title: '', content: '', keyWords: '', adress: '' });
        sticker.toDOM();
        sticker.full('map');
    }
    saving.onclick = function() { save(); }
    cleaning.onclick = function() { clear(); }

    const field = document.getElementById('stickyNotes');

    field.onclick = function(e) {
        const target = e.target;
        const action = target.getAttribute('data-action');
        if (action == 'delete') { deleteSticker(target.parentNode.id); }
        if (action == 'edit') {
            if (document.getElementById(`adress${target.parentNode.id}`)) {
                editMapSticker(target.parentNode.id);
            } else {
                editSticker(target.parentNode.id);
            }
        }
    };
};