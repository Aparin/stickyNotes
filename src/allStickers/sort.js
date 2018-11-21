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
            if (document.getElementById(`adress${i}`)) { // определяем есть запись с адресом
                document.getElementById(`adress${i}`).id = `adress${i-1}`; //если есть - меняем ей id
            }
            elem.id = (i - 1);
        };
        if (document.getElementById(`adress${ move.id}`)) {
            document.getElementById(`adress${ move.id}`).id = `adress${secondID}`;
        }
        move.id = secondID;
    } else {
        elem.parentNode.insertBefore(move, elem);

        for (let i = +firstID - 1; i !== +secondID - 1; i--) {
            const elem = document.getElementById(i);
            if (document.getElementById(`adress${i}`)) { // определяем есть запись с адресом
                document.getElementById(`adress${i}`).id = `adress${i+1}`; //если есть - меняем ей id
            }
            elem.id = (i + 1);
        };
        if (document.getElementById(`adress${ move.id}`)) {
            document.getElementById(`adress${ move.id}`).id = `adress${secondID}`;
        }
        move.id = secondID;
    }

};