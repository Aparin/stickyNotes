import makeDOMelement from '../model/makeDOMElement';
import state from '../model/state';
import editSticker from '../view/editSticker/editSticker';

let module;
const testObj = { title: "New title" };
const testState = [
    { title: 'Title1', content: 'content1', keyWords: 'keyword1', adress: 'adress1' },
    { title: 'Title2', content: 'content2', keyWords: 'keyword2', adress: 'adress2' }
];

const error = (module, err) => {
    console.log(`В коде модуля "${module}" ошибка "${err.name}"! ${err.message}`);
    document.body.insertAdjacentHTML('afterend',
        `<p style="color: red">В коде модуля <b>"${module}"</b> ошибка "${err.name}"!
                                <br>${err.message}
        </p>`);
    // throw "stop";
}

/****************** MODEL *****************/

/***** makeDOMelement  *****/
module = 'makeDOMelement';
describe(module, function() {
    try {
        it('Проверка создания узла', function() {
            assert.equal(makeDOMelement('р', 'red', 'Hi, world').outerHTML, '<р class="red">Hi, world</р>');
            assert.equal(makeDOMelement('div', 'red', 'Hi, world').outerHTML, '<div class="red">Hi, world</div>');
            assert.equal(makeDOMelement('div', 'red').outerHTML, '<div class="red"></div>');
        });
    } catch (e) {
        error(module, e);
    }
});

/***** state  *****/
module = 'state';
describe(module, function() {
    try {
        it('Запись и чтение массива', function() {
            state.set(testState);
            assert.equal(testState, state.get());
        });
        it('Добавление элемента в конец массива', function() {
            state.add(testObj);
            const stLng = state.get().length;
            assert.equal(state.getElement(stLng), testObj);
        });
        it('Запись и чтение элемента', function() {
            state.setElement(testState[0]);
            assert.equal(state.getElement(1), testState[0]);
        });
        it('Вставка элемента', function() {
            state.insertElement(1, testObj);
            assert.equal(state.getElement(1), testObj);
        });
        it('Удаление элемента', function() {
            state.delElement(1);
            assert.equal(state.getElement(1), testState[0]);
        });
    } catch (e) {
        error(module, e);
    }
});

/****************** VIEW ******************/
/*
module = 'editSticker';
describe(module, function() {
    document.body.insertAdjacentHTML('beforeend', '<div id="editSticker"><h1>Sticker</h1></div>');
    // editSticker('editSticker');
    it('Проверка ', function() {
        assert.equal(true, document.getElementById('editSticker').className === 'editSricker');
    });
});
*/
/*
import Sticker from './singleSticker/Sticker';
import currentId from './singleSticker/currentId';


*/
/*
describe('makeSticker', function() {
    it('Создание нового стикера c стандартными настройками', function() {
        assert.equal(makeSticker({}).toString(), `makeSticker вернул объект: id : 1, className : newSticker, head : Новый стикер, body : Текст стикера`)
    });

    it('Создание нового стикера', function() {
        assert.equal(makeSticker({ id: 15, className: 'newClass', head: 'Super HeadLine', body: 'Some very intresting or important text' }), 'makeSticker вернул объект: id : 15, className : newClass, head : Super HeadLine, body : Some very intresting or important text');
    });

});
*/
/*
const sticker = new Sticker();
console.log(sticker.name);
describe('Sticker', function() {
    it('Создание нового стикера на объекте cо дефолтными настройками', function() {
        assert.equal(sticker.name, `Новый стикер`);
        assert.equal(sticker.type, `simple`);
        assert.equal(sticker.content, '');
        assert.equal(sticker.id, currentId());
    });

});
*/