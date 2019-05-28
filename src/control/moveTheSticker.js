/* eslint-disable no-param-reassign */
/* eslint-disable func-names */
import sort from './sort';

export default function moveTheSticker(id) {
  const sticker = document.getElementById(id);
  sticker.style.position = 'absolute';

  function moveSticker(e) {
    sticker.style.left = `${e.pageX - sticker.offsetWidth / 2}px`;
    sticker.style.top = `${e.pageY - sticker.offsetHeight / 2}px`;
  }

  sticker.onmousemove = function (e) { moveSticker(e); };
  sticker.ondragstart = function () { return false; };

  sticker.onmouseup = function (e) {
    sticker.onmousemove = null;
    sticker.onmouseup = null;
    sticker.style.zIndex = 1;
    sticker.style.position = 'static';
    sticker.style.left = null;
    sticker.style.top = null;

    function surfacing(elem) {
      while (elem !== document) {
        const dataAction = elem.getAttribute('data-action');
        if (dataAction === 'sticker') { return (elem.id); }
        elem = elem.parentNode;
      }
      return undefined;
    }

    const next = document.elementFromPoint(e.pageX, e.pageY);
    sort(id, surfacing(next));
  };
}
