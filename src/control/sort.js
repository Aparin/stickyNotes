import currentId from '../model/currentId';
import objects from '../model/objects';

export default function sort(firstID, secondID) {
    const moveObj = objects.getElement(firstID);

    objects.delElement(firstID);
    objects.insertElement(secondID, moveObj);

    if (secondID === undefined) { secondID = currentId() - 1; }
    if (firstID === secondID) { return };
    const move = document.getElementById(firstID);
    const elem = document.getElementById(secondID);

    if (firstID < secondID) {
        elem.parentNode.insertBefore(move, elem.nextSibling);
        for (let i = +firstID + 1; i !== +secondID + 1; i++) {
            const elem = document.getElementById(i);
            elem.id = (i - 1);
        };

        move.id = secondID;
    } else {
        elem.parentNode.insertBefore(move, elem);

        for (let i = +firstID - 1; i !== +secondID - 1; i--) {
            const elem = document.getElementById(i);
            elem.id = (i + 1);
        };
        move.id = secondID;
    }

};