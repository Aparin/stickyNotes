import exmpl from '../view/example';
import Sticker from '../model/Sticker';
import save from './save';
import deleteSticker from '../view/deleteSticker';
import clear from './clear';
import moveTheSticker from './moveTheSticker';
import editSticker from '../view/editSticker/editSticker';
import editMapSticker from '../view/editMapSticker';

export default function listeners() {
    example.onclick = function() { exmpl(); }
    plus.onclick = function() {
        const sticker = new Sticker();
        sticker.create();
        sticker.full();
    }
    plusMap.onclick = function() {
        const sticker = new Sticker('', '', 'map');
        sticker.create();
        sticker.full();
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

    field.addEventListener('mousedown', function(e) {
        let target = e.target;
        while (target != document) {
            const dataAction = target.getAttribute('data-action');
            const style = target.getAttribute('class');
            if (dataAction == 'edit' || dataAction == 'delete' || dataAction == 'ok' ||
                dataAction == 'close') { return }
            if (dataAction == 'sticker' && style != 'editSticker' && style != 'editMapSticker') {
                if (event.which == 1) moveTheSticker(target.id);
                return;
            }
            target = target.parentNode;
        }
    });
}