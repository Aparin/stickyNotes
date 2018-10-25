import out from '../out';

export default function moveTheSticker(id, e) {
    const sticker = document.getElementById(id);
    sticker.style.position = 'absolute';


    function moveSticker(e) {
        sticker.style.left = e.pageX - sticker.offsetWidth / 2 + 'px';
        sticker.style.top = e.pageY - sticker.offsetHeight / 2 + 'px';
    }
    sticker.onmousemove = function(e) {
        moveSticker(e);
    }
    sticker.ondragstart = function() {
        return false;
    };
    sticker.onmouseup = function() {
        sticker.onmousemove = null;
        sticker.onmouseup = null;
    }
}