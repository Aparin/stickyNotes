import { makeSticker } from './makeSticker';

export default function editSticker(id) {
    let sticker = document.getElementById(id);
    let head = makeSticker(id).head;
    let body = makeSticker(id).body;
    sticker.addEventListener('dblclick', function() {
        if (sticker.className === 'newSticker') {
            sticker.classList = 'editSticker';
            sticker.innerHTML = (`<input type="text"size="38" name="head" style="border: 0px; font-size:14px; width:290px; margin: 5px;" value="${head}" /><br />	
            <textarea style="width: 290px; height:265px;  margin: 3px; border: 0px;" name="textArea">${body}</textarea>`);

        } else {
            sticker.className = 'newSticker';
        }

    });
}