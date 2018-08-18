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
            document.write(`
            <div id="${this.id}" class="${this.className}">
                <h1>${head}</h1>
                ${body}
            </div>
            `);
            var place = document.getElementById(id);
            place.style.position = "absolute";
            place.style.left = x + 'px';
            place.style.top = y + 'px';
        }
    }
    return newSticker;

};

export { makeSticker };