import addMiniSigns from '../../model/addMiniSigns';
import objects from '../../model/objects';

export default function editSticker(id) {
    const sticker = document.getElementById(id);
    sticker.className = 'editSticker';
    const el = objects.getElement(id);

    let title = el.title;
    let content = el.content;
    let keyWords = el.keyWords;
    //let adress = el.adress;

    sticker.innerHTML = `    
    <img src="img/edit_10.png" class="editBig" title="Закрыть без изменений" 
    data-action="close">
    <img src="img/save_18.png" class="editBig" title="Применить изменения" 
    data-action="ok">
    <input type="text" style="width:250px" draggable="false" value="${title}" placeholder="Введите заголовок">
    <br />
    <textarea name="textArea" placeholder="Место для заметок">${content}</textarea>
    <input class = "keyWords" name="keyWords" placeholder="Введите теги через запятую" value="${keyWords}">`;

    sticker.onclick = function(e) {
        const target = e.target;
        const action = target.getAttribute('data-action');

        if (action == 'ok') {
            title = sticker.getElementsByTagName('input')[0].value;
            content = sticker.getElementsByTagName('textArea')[0].value;
            keyWords = sticker.getElementsByTagName('input')[1].value;
            objects.setElenent(id, { title, content, keyWords });
            console.log(objects.getElement(id));

            sticker.innerHTML = '';
            if (sticker.className == 'editSticker') { sticker.className = 'newSticker'; };
            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${title}</h1>`;
        }
        if (action == 'close') {
            sticker.innerHTML = '';
            if (sticker.className == 'editSticker') { sticker.className = 'newSticker' };
            if (sticker.className == 'editMapSticker') { sticker.className = 'mapSticker' };
            sticker.appendChild(addMiniSigns());
            sticker.innerHTML += `<h1>${title}</h1>`
        }
    };
}