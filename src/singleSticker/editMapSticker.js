import out from '../out';
import addMiniSigns from './addMiniSigns';
import xhrYaMap from '../transmission/xhrYaMap';

export default function editMapSticker(id) {
    const sticker = document.getElementById(id);
    sticker.className = 'editMapSticker';
    let head = sticker.querySelector('h1').textContent;
    let body = sticker.querySelector('p').textContent;
    let adress = sticker.querySelector('span').textContent;


    sticker.innerHTML = `    
    <img src="img/edit_10.png" class="editBig" title="Закрыть без изменений" 
    data-action="close">
    <img src="img/save_18.png" class="editBig" title="Применить изменения" 
    data-action="ok">
    <input type="text" style="width:250px; " draggable="false" value="${head}">
    <br />	
    <input type="text" title="Адрес: " class="adress" draggable="false" value="${adress}">
    <img src="img/reload_18.png" class="editBig" title="Загрузить карту" 
    data-action="reload">
    <br />	
    
    <textarea name="textArea">${body}</textarea>
    <div id='map' class='editMap'></div>
    `;

    xhrYaMap(adress, id);
    sticker.onclick = function(e) {
        const target = e.target;
        const action = target.getAttribute('data-action');

        if (action == 'ok') {
            head = sticker.getElementsByTagName('input')[0].value;
            body = sticker.getElementsByTagName('textArea')[0].value;
            sticker.innerHTML = '';
            sticker.className = 'mapSticker';
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`;
        }
        if (action == 'close') {
            sticker.innerHTML = '';
            sticker.className = 'mapSticker';
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${head}</h1><p>${body}</p>`
        }

        if (action == 'reload') {
            map.innerHTML = '';
            adress = sticker.getElementsByTagName('input')[1].value;
            console.log(adress);
            xhrYaMap(adress, id);
        }
    };
}