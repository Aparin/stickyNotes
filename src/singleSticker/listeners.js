import deleteSticker from './deleteSticker';
import makeSticker from './makeSticker';
import currentId from './currentId';
import save from '../transmission/save';
import clear from '../allStickers/clear';
import editSticker from './editSticker';
import out from '../out';
import moveTheSticker from './moveTheSticker';

export default function listeners() {
    plus.onclick = function() { makeSticker(); }
    saving.onclick = function() { save(); }
    cleaning.onclick = function() { clear(); }

    let field = document.getElementById('stickyNotes');

    field.onclick = function(e) {
        const target = e.target;
        const action = target.getAttribute('data-action');
        if (action == 'delete') { deleteSticker(target.parentNode.id); }
        if (action == 'edit') { editSticker(target.parentNode.id); }
    };

    field.addEventListener('mousedown', function(e) {
        let target = e.target;
        while (target != document) {
            const dataAction = target.getAttribute('data-action');
            if (dataAction == 'edit' || dataAction == 'delete' || dataAction == 'ok' || dataAction == 'close') { return }
            if (dataAction == 'sticker') {
                if (event.which == 1) moveTheSticker(target.id);
                return;
            }
            target = target.parentNode;
        }
    });
}