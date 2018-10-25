import out from '../out';
import currentId from '../singleSticker/currentId';

export default function sort(firstID, secondID) {

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





    // out2.innerHTML = firstID + ' ' + secondID;

};