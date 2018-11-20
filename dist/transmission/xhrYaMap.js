'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = xhrYaMap;

var _out = require('../out');

var _out2 = _interopRequireDefault(_out);

var _yaMap = require('./yaMap');

var _yaMap2 = _interopRequireDefault(_yaMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function xhrYaMap(adress, id) {
    function xhr(adress) {
        var request = function request(resp) {
            // console.log(resp); // {"response":{"GeoObjectCollection": ...
            var obj = JSON.parse(resp); // конвертируем из json в объект js // 
            obj = obj.response; // {GeoObjectCollection: {…}}
            obj = obj.GeoObjectCollection; // {metaDataProperty: {…}, featureMember: Array(1)}
            obj = obj.featureMember[0]; // GeoObject: {metaDataProperty: {…}, boundedBy: {…}, Point: {…}}
            obj = obj.GeoObject.Point; // {pos: "37.620555 55.741333"}
            var coords = obj.pos; // 37.620555 55.741333
            // console.log(coords);
            return coords;
        };

        function httpGet(fullUrl) {
            return new Promise(function (resolve) {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", fullUrl, true);
                xhr.onload = function () {
                    resolve((0, _yaMap2.default)(request(xhr.responseText), id));
                };
                xhr.send();
            });
        }

        var url = 'https://geocode-maps.yandex.ru/1.x/?';
        var apikey = '0299c42e-268e-4337-9740-e158b72d29fd&format=json&geocode=';
        var fullUrl = url + apikey + adress;

        return httpGet(fullUrl);
    }
    xhr(adress);
}