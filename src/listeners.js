import deleteSticker from './deleteSticker';
import makeSticker from './makeSticker';
import currentId from './currentId';
import save from './save';
import clear from './clear';
import out from './out';

export default function listeners() {
    let id = currentId();

    let field = document.getElementById('stickyNotes');

    field.onclick = function(e) {
        var target = e.target;
        if (target.parentNode.id == 'plus') { makeSticker(id); }
        if (target.parentNode.id == 'save') { save(); }
        if (target.parentNode.id == 'clear') { clear(); }

        var action = target.getAttribute('data-action');
        if (action == 'delete') { deleteSticker(target.parentNode.id); }



    };
}