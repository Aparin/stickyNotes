import makeDOMelement from './makeDOMelement';
import editSticker from './editSticker';
import out from './out';
import listener from './listener';
import mouseOverOut from './mouseOverOut';
import deleteSticker from './deleteSticker';

function makeSticker(id, className = 'newSticker', head = 'Новый стикер', body = 'Текст стикера') {

    let dom = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', className, '', id);
    const fragment = document.createDocumentFragment();

    const del = document.createElement('img');
    del.src = 'img/del_10.png';
    del.classList.add('del');
    del.addEventListener('click', function() {
        deleteSticker(id);
    });
    fragment.appendChild(del);

    fragment.appendChild(makeDOMelement('h1', '', head)); // adding headline
    fragment.appendChild(makeDOMelement('div', '', body));
    wrap.appendChild(fragment);
    dom.appendChild(wrap);
    listener(id, "dblclick", editSticker(id));

    mouseOverOut(id);

};

export { makeSticker };