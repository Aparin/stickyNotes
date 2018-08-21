import { movingTheDiv } from './movingTheDiv';

function makeSticker(obj) {
    let { id = 1, className = 'newSticker', head = 'Новый стикер', body = 'Текст стикера' } = obj;
    const newSticker = {
        'id': id,
        'className': className,
        'head': head,
        'body': body,
        toString: function() {
            return `makeSticker вернул объект: id : ${this.id}, className : ${this.className}, head : ${this.head}, body : ${this.body}`;
        },
        show: function(x = 1, y = 1, z = 1) {
            function showSticker() {
                document.write(`
                <div id="${id}" class="${className}">
                    <h1>${head}</h1>
                    ${body}
                </div>
            `);
            }
            showSticker();

            // coordinates of sticker
            const place = document.getElementById(id);
            place.style.position = "absolute";
            place.style.left = x + 'px';
            place.style.top = y + 'px';
            movingTheDiv(this.id);

        }
    }


    return newSticker;

};

export { makeSticker };