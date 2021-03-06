/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import currentId from '../model/currentId';
import state from '../model/state';

export default function sort(firstID, secondID) {
  const moveObj = state.getElement(firstID);

  state.delElement(firstID);
  state.insertElement(secondID, moveObj);


  if (secondID === undefined) { secondID = currentId() - 1; }
  if (firstID === secondID) { return; }
  const move = document.getElementById(firstID);
  const elem = document.getElementById(secondID);

  if (firstID < secondID) {
    elem.parentNode.insertBefore(move, elem.nextSibling);
    for (let i = +firstID + 1; i !== +secondID + 1; i += 1) {

      const elem = document.getElementById(i);
      elem.id = (i - 1);
    }

    move.id = secondID;
  } else {
    elem.parentNode.insertBefore(move, elem);

    for (let i = +firstID - 1; i !== +secondID - 1; i -= 1) {
      const elem = document.getElementById(i);
      elem.id = (i + 1);
    }
    move.id = secondID;
  }
}
