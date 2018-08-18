describe('makeDOMelement', function() {
    it('Проверка создания узла', function() {
        assert.equal(makeDOMelement('р', 'red', 'Hi, world').outerHTML, '<р class="red">Hi, world</р>');
        assert.equal(makeDOMelement('div', 'red', 'Hi, world').outerHTML, '<div class="red">Hi, world</div>');
        assert.equal(makeDOMelement('div', 'red').outerHTML, '<div class="red"></div>');
    });
});

describe('makeSticker', function() {
    it('Создание нового стикера c стандартными настройками', function() {
        assert.equal(makeSticker().toString(), `makeSticker вернул объект: id : 1, className : newSticker, head : Новый стикер, body : Текст стикера`)
    });

    it('Создание нового стикера', function() {
        assert.equal(makeSticker(15, 'newClass', 'Super HeadLine', 'Some very intresting or important text'), 'makeSticker вернул объект: id : 15, className : newClass, head : Super HeadLine, body : Some very intresting or important text');

    });

});