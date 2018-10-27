import makeDOMelement from './makeDOMElement';
import editSticker from './editSticker';
import out from '../out';
import mouseOverOut from '../allStickers/mouseOverOut';
import addMiniSigns from './addMiniSigns';
import currentId from './currentId';



export default function makeSticker(head, body, className) {

    let id = currentId();
    if (!head) { head = "Новый стикер"; }
    if (!body) { body = ""; }
    if (!className) { className = 'editSticker'; }

    let area = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', className, '', id);
    const fragment = document.createDocumentFragment();

    fragment.appendChild(addMiniSigns(id));
    fragment.appendChild(makeDOMelement('h1', '', head)); // adding headline
    fragment.appendChild(makeDOMelement('p', '', body));
    wrap.appendChild(fragment);

    area.appendChild(wrap);

    document.getElementById(id).setAttribute('data-action', 'sticker');
    if (className === "editSticker") { editSticker(id); }
    //document.getElementById(id).setAttribute('draggable', 'true');

    // mouseOverOut(id);



};