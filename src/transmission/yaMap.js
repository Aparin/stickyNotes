import makeDOMelement from '../singleSticker/makeDOMelement';
import out from '../out';
export default function yaMap(x, y, id) {
    /*
    const map = document.getElementById(id);
    const div1 = makeDOMelement('div', 'editMap', '', 'map');
    out(`div.id= ${div.id}`);
    map.appendChild(div1);
*/
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    //out(`x= ${x}, y= ${y}, id= ${id}`);
    ymaps.ready(init);

    function init() {
        // Создание карты.    
        const myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [x, y],
            // center: [55.76, 37.64],
            // [55.76, 37.64]
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17
        });

    }
}