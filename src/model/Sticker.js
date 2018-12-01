import currentId from './currentId';
import makeDOMelement from './makeDOMElement';
import addMiniSigns from './addMiniSigns';
import editSticker from '../view/editSticker/editSticker';
import editMapSticker from '../view/editMapSticker';
import objects from './objects';

export default class Sticker {
    constructor({ title = '', content = '', keyWords = '', adress = '' }) {
        this.title = title;
        this.content = content;
        this.adress = adress;
        this.keyWords = keyWords;
        this.id = currentId();
    }

    create() {
        objects.add({
            title: this.title,
            content: this.content,
            keyWords: this.keyWords,
            adress: this.adress,
            id: this.id
        })

        const area = document.getElementById('stickyNotes');
        const wrap = makeDOMelement('div', 'newSticker', '', this.id);
        const fragment = document.createDocumentFragment();

        fragment.appendChild(addMiniSigns(this.id));
        fragment.appendChild(makeDOMelement('h1', '', this.title));
        /*
        if (this.type === 'map') {
            const adr = makeDOMelement('p', '', this.adress);
            fragment.appendChild(adr);
        }
        fragment.appendChild(makeDOMelement('p', '', this.content));
        fragment.appendChild(makeDOMelement('p', '', ''));*/
        wrap.appendChild(fragment);
        area.appendChild(wrap);
        document.getElementById(this.id).setAttribute('data-action', 'sticker');
    }

    hide() {
        document.getElementById(this.id).style = 'display: none';
    }

    show() {
        document.getElementById(this.id).style = 'display: display-block';
    }
    mini() {
        //состояние стикера в свёрнутом виде
    }

    full(type) {
        if (type === 'map') {
            editSticker(this.id, type);
        } else {
            editSticker(this.id);
        }
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