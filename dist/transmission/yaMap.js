'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = yaMap;

var _makeDOMelement = require('../singleSticker/makeDOMelement');

var _makeDOMelement2 = _interopRequireDefault(_makeDOMelement);

var _out = require('../out');

var _out2 = _interopRequireDefault(_out);

var _xhrYaMap = require('./xhrYaMap');

var _xhrYaMap2 = _interopRequireDefault(_xhrYaMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function yaMap(coords) {
    // console.log(coords);
    var coordsArr = coords.split(' '); // converting string to array
    var x = +coordsArr[0];
    var y = +coordsArr[1];
    // console.log(`x= ${x}, y= ${y}`)

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

    function init() {
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [y, x],
            // controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
            controls: ['zoomControl'],

            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });

        // Создание метки 
        var myPlacemark = new ymaps.Placemark(
        // Координаты метки
        [y, x]);

        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);
    }
};