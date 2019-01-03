import currentId from './currentId';
import makeDOMelement from './makeDOMElement';
import addMiniSigns from './addMiniSigns';
import editSticker from '../view/editSticker/editSticker';
import editMapSticker from '../view/editMapSticker';
import objects from './objects';

export default class Sticker {
    constructor(indx) {
        this.indx = indx;
        this.element = objects.getElement(indx);
        this.id = indx;
    }

    toDOM() {
        const id = this.id;
        let title = '';
        if (this.element) {
            ({ title = '' } = this.element)
        }
        const area = document.getElementById('stickyNotes');
        const wrap = makeDOMelement('div', 'newSticker', '', id);
        const fragment = document.createDocumentFragment();

        fragment.appendChild(addMiniSigns(id));
        fragment.appendChild(makeDOMelement('h1', '', title));

        wrap.appendChild(fragment);
        area.insertBefore(wrap, area.firstChild);
        document.getElementById(id).setAttribute('data-action', 'sticker');
    }

    hide() {
        document.getElementById(this.id).style = 'display: none';
    }

    show() {
        document.getElementById(this.id).style = 'display: display-block';
    }

    full(type = '') {
        if (type === 'map') {
            editSticker(this.id, type);
        } else {
            editSticker(this.id, type);
        }
    }

}