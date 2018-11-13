export default class Sticker {
    constructor(name = 'Новый стикер', type = 'simple', content = '') {
        this.type = type;
        this.name = name;
        this.content = content;
    }

    mini() {
        //состояние стикера в свёрнутом виде
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