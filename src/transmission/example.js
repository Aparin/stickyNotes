import makeSticker from '../singleSticker/makeSticker';

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
    alert("Стикеры можно менять местами.")
    makeSticker('Become an expert in JavaScript', 'As soon as posible', 'newSticker');
    makeSticker('Learn React', 'On middle level', 'newSticker');
    makeSticker('Learn Node.JS', 'And develop multi-user services', 'newSticker');
    makeSticker('Новый стикер', '', 'newSticker');
    makeSticker('Новый стикер', '', 'newSticker');
    makeSticker('To find a cool job', 'With good salary', 'newSticker');
    const ex = document.getElementById('example');
    ex.remove();
}