import out from '../out';

import currentId from './currentId';
import makeDOMelement from './makeDOMElement';
import editMapSticker from './editMapSticker';
import addMiniSigns from './addMiniSigns';
import yaMap from '../transmission/yaMap';


// import mouseOverOut from '../allStickers/mouseOverOut';

export default function makeMapSticker(head, body, className, x, y) {
    const id = currentId();
    if (!head) { head = "Новый стикер"; }
    if (!body) { body = ""; }
    if (!className) { className = 'editMapSticker'; }

    const area = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', className, '', id);
    const fragment = document.createDocumentFragment();

    fragment.appendChild(addMiniSigns(id));
    fragment.appendChild(makeDOMelement('h1', '', head)); // adding headline
    fragment.appendChild(makeDOMelement('span', 'x', head));
    fragment.appendChild(makeDOMelement('span', 'y', head));
    fragment.appendChild(makeDOMelement('p', '', body));
    fragment.appendChild(makeDOMelement('div', 'editMap', '', 'map'));
    wrap.appendChild(fragment);

    area.appendChild(wrap);

    document.getElementById(id).setAttribute('data-action', 'sticker');

    if (className === "editMapSticker") {
        editMapSticker(x, y, id);
    } else { yaMap(x, y, id); }

    // mouseOverOut(id);
};