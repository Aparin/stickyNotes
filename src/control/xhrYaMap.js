/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
import message from '../view/message/message';
import yaMap from '../view/yaMap';

export default function xhrYaMap(adress, id) {
  function xhr(adress) {
    const request = (resp) => {
      let obj = JSON.parse(resp); // конвертируем из json в объект js //
      obj = obj.response; // {GeoObjectCollection: {…}}
      obj = obj.GeoObjectCollection; // {metaDataProperty: {…}, featureMember: Array(1)}
      obj = obj.featureMember[0]; // GeoObject: {metaDataProperty: {…}, boundedBy: {…}, Point: {…}}
      if (obj === undefined) {
        message('Адрес не найден', 'red', 3000);
        return undefined;
      }
      obj = obj.GeoObject.Point; // {pos: "37.620555 55.741333"}
      const coords = obj.pos; // 37.620555 55.741333
      return coords;
    };

    function httpGet(fullUrl) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', fullUrl, true);
        xhr.onload = () => {
          resolve(
            yaMap(request(xhr.responseText), id),
          );
        };
        xhr.send();
      });
    }

    const url = 'https://geocode-maps.yandex.ru/1.x/?';
    const apikey = '0299c42e-268e-4337-9740-e158b72d29fd&format=json&geocode=';
    const fullUrl = url + apikey + adress;

    return (httpGet(fullUrl));
  }
  xhr(adress);
}
