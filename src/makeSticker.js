function makeSticker(id = 1, className = 'newSticker', head = 'Новый стикер', body = 'Текст стикера') {

    const newSticker = {
        'id': id,
        'className': className,
        'head': head,
        'body': body,
        toString: function() {
            return `makeSticker вернул объект: id : ${this.id}, className : ${this.className}, head : ${this.head}, body : ${this.body}`;
        }
    }
    return newSticker;

};

export { makeSticker };