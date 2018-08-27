import { makeSticker } from './makeSticker';
import { out } from './out';

export default function editSticker(id) {
    let sticker = document.getElementById(id);
    let head = sticker.children[0].textContent;
    let body = sticker.children[1].textContent;

    sticker.addEventListener('dblclick', function() {
        if (sticker.className === 'newSticker') {
            sticker.classList = 'editSticker';
            sticker.innerHTML = (`<input type="text" name="head" style="border: 0px; font-size:14px; width:290px; margin: 5px;" value="${head}" /><br />	
            <textarea style="width: 290px; height:265px;  margin: 3px; border: 0px;" name="textArea">${body}</textarea>`);

        } else {
            head = sticker.children[0].value;
            body = sticker.getElementsByTagName('textArea')[0].value;

            sticker.innerHTML = `<h1>${head}</h1><div>${body}</div>`;
            sticker.className = 'newSticker';
        }

    });
}