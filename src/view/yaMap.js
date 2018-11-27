export default function yaMap(coords) {
    if (!coords) { return };
    const coordsArr = coords.split(' '); // converting string to array
    const x = +coordsArr[0];
    const y = +coordsArr[1];

    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

    function init() {
        // Создание карты.    
        const myMap = new ymaps.Map("map", {
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
        /*
        // Создание метки 
        const myPlacemark = new ymaps.Placemark(
            // Координаты метки
            [y, x],
            //{ balloonContent: '<img src="/img/star_16.png" />' }
        );
        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);
        */
    }
};