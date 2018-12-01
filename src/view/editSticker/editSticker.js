import addMiniSigns from '../../model/addMiniSigns';
import objects from '../../model/objects';
import xhrYaMap from '../../control/xhrYaMap';

export default function editSticker(id, type) {
    const sticker = document.getElementById(id);
    sticker.className = 'editSticker';
    const el = objects.getElement(id);

    let title = el.title;
    let content = el.content;
    let keyWords = el.keyWords;
    let adress = el.adress;

    sticker.innerHTML = `    
    <img src="img/edit_10.png" class="editBig" title="Закрыть без изменений" 
    data-action="close">
    <img src="img/save_18.png" class="editBig" title="Применить изменения" 
    data-action="ok">
    <input type="text" style="width:250px" draggable="false" value="${title}" placeholder="Введите заголовок">
    <br />
    <textarea name="textArea" placeholder="Место для заметок">${content}</textarea>`;
    if (adress || type === 'map') {
        sticker.innerHTML += `  
        <input type="text" title="Адрес: " class="adress" draggable="false" value="${adress}" placeholder="Введите адрес и нажмите обновить -->">
        <img src="img/reload_18.png" class="editBig" title="Загрузить карту" 
        data-action="reload">
        <div id='map' class='editMap'></div>
        `;
        sticker.className = 'editMapSticker';
        if (adress) { xhrYaMap(adress, id) };
    }
    sticker.innerHTML += ` 
    <input class = "keyWords" name="keyWords" placeholder="Введите теги через запятую" value="${keyWords}">`;

    sticker.onclick = function(e) {
        const target = e.target;
        const action = target.getAttribute('data-action');

        if (action == 'ok') {
            title = sticker.getElementsByTagName('input')[0].value;
            content = sticker.getElementsByTagName('textArea')[0].value;
            if (adress) {
                adress = sticker.getElementsByTagName('input')[1].value;
                keyWords = sticker.getElementsByTagName('input')[2].value;
            } else {
                keyWords = sticker.getElementsByTagName('input')[1].value;
            }

            objects.setElement(id, { title, content, keyWords, adress });

            sticker.innerHTML = '';
            sticker.className = 'newSticker';
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${title}</h1>`;
        }
        if (action == 'close') {
            sticker.innerHTML = '';
            sticker.className = 'newSticker';
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${title}</h1>`
        }
        if (action == 'reload') {
            map.innerHTML = '';
            adress = sticker.getElementsByTagName('input')[1].value;
            xhrYaMap(adress, id);
        }
    };
}