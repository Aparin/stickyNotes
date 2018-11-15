import out from '../out';
import currentId from './currentId';
import makeDOMelement from './makeDOMElement';
import addMiniSigns from './addMiniSigns';

export default class Sticker {
    constructor(name = 'Новый стикер', type = 'simple', content = '') {
        this.type = type;
        this.name = name;
        this.content = content;
    }

    create() {
        this.id = currentId();
        const area = document.getElementById('stickyNotes');
        const wrap = makeDOMelement('div', 'newSticker', '', this.id);
        const fragment = document.createDocumentFragment();

        fragment.appendChild(addMiniSigns(this.id));
        fragment.appendChild(makeDOMelement('h1', '', this.name)); // adding headline
        fragment.appendChild(makeDOMelement('p', '', this.content));
        wrap.appendChild(fragment);

        area.appendChild(wrap);

        document.getElementById(this.id).setAttribute('data-action', 'sticker');
    }

    hide() {
        document.getElementById(this.id).style = 'display: none';
    }

    mini() {
        //состояние стикера в свёрнутом виде
    }

    show() {
        return out('show');
    }



    full() {
        //состояние стикера в развёрнутом виде
    }

    move() {
        //перемещение стикера
    }

    setId() {
        //установить id
    }

    addUrl() {

    }
}