import makeSticker from '../singleSticker/makeSticker';
import makeMapSticker from '../singleSticker/makeMapSticker';
import yaMap from './yaMap';
import currentId from '../singleSticker/currentId';

export default function example() {

    /* На гитхабе хром блокирует кросс-доменную загрузку даже по https. Яндекс-браузер работает норм.

    const url = 'https:// ******.ru/files/stickyNotes/example.php';
    function httpGet(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = function() { // (3)
            if (xhr.readyState === 4 && xhr.status === 200) {
                const exampleStickers = xhr.responseText;
                //out2.innerHTML = exampleStickers;
                document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', exampleStickers);
            }
        }
    }
    httpGet(url);
    */

    makeSticker('Become an expert in JavaScript', 'As soon as posible', 'newSticker');
    makeSticker('Learn React', 'On middle level', 'newSticker');
    makeSticker('Learn Node.JS', 'And develop multi-user services', 'newSticker');
    makeSticker('To find a cool job', 'With good salary', 'newSticker');
    makeMapSticker('ВДНХ на карте', 'Посетить выставку промышленного оборудования (пищевая пром-ть; станки для бахил и т.п.)', 'editMapSticker', 'Пр-т Мира, 119, Москва');
    //[55.76, 37.64]
    // yaMap(55.76, 37.64, currentId() - 1);
    // yaMap([55.76, 37.64], currentId() - 1);

    const ex = document.getElementById('example');
    ex.remove();

    // alert("Стикеры можно менять местами.")
}