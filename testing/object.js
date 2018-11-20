"use strict";
export default function object() {

    class Sticker {
        constructor(name = 'Новый стикер', content = '') {
            this.type = 'simple';
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

    class MapSticker extends Sticker {
        constructor(adress = 'Берлин', type, name, content) {
            super(name, content);
            this.adress = adress;
            this.type = 'mapSticker';
        }
    }

    const sticker = new MapSticker();
    return (`${sticker.type} ${sticker.name} ${sticker.adress}`);
}