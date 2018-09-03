import deleteSticker from './deleteSticker';
import out from './out';

export default function listener() {
    var id = localStorage.getItem('id');
    if (!id) { id = 0; }

    let field = document.getElementById('stickyNotes');

    field.onclick = function(e) {
        var target = e.target;
        var action = target.getAttribute('data-action');
        if (action == 'delete') {
            deleteSticker(target.parentNode.id);
        }
    };
}