import state from '../model/state';

export default function deleteSticker(id) {
  document.getElementById(id).remove();
  state.delElement(id);

  let i;
  // eslint-disable-next-line no-constant-condition
  for (i = +id + 1; true; i += 1) {
    const sticker = document.getElementById(i);

    if (!sticker === false) {
      sticker.id = i - 1;
    } else { break; }
  }
  return i;
}
