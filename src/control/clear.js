/* eslint-disable func-names */
import popup from '../view/popup';

export default function clear(key, e) {
  if (!localStorage.getItem(key)) {
    const msg = 'Нет сохранённых стикеров, <br /> удалять нечего...';
    popup({ msg, e, height: 150 });
  } else {
    const msg = 'Удалить без возможности восстановления?';
    popup({ msg, e, height: 150 });
    const div = document.createElement('div');

    const popupArea = document.getElementById('popup');

    div.onclick = function (e2) {
      if (e2.target.value === 'Да') {
        // eslint-disable-next-line no-constant-condition
        for (let id = 1; true; id += 1) {
          const sticker = document.getElementById(id);
          if (!sticker === false) {
            sticker.remove();
          } else { break; }
        }
        localStorage.clear();
        popupArea.parentNode.removeChild(popupArea);
      } else {
        popupArea.parentNode.removeChild(popupArea);
      }
    };
    const inp = 'style="margin: 5px; padding: 3px; font-size: 14px;"';
    div.innerHTML = `
            <input ${inp} type="button" value="Да">
            <input ${inp} type="button" value="Нет">`;

    popupArea.appendChild(div);
  }
}
