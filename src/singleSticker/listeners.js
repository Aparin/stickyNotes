import deleteSticker from './deleteSticker';
import makeSticker from './makeSticker';
import currentId from './currentId';
import save from '../allStickers/save';
import clear from '../allStickers/clear';
import editSticker from './editSticker';
import out from '../out';

export default function listeners() {
    plus.onclick = function() { makeSticker(); }
    saving.onclick = function() { save(); }
    cleaning.onclick = function() { clear(); }

    let field = document.getElementById('stickyNotes');

    field.onclick = function(e) {
        var target = e.target;
        var action = target.getAttribute('data-action');
        if (action == 'delete') { deleteSticker(target.parentNode.id); }
        if (action == 'edit') { editSticker(target.parentNode.id); }
    };
}