import objects from '../model/objects';

export default function deleteSticker(id) {

    document.getElementById(id).remove();
    objects.delElement(id);

    for (var i = +id + 1; true; i++) {
        const sticker = document.getElementById(i);

        if (!sticker === false) {
            sticker.id = i - 1;
        } else { break; }
    }
    return i;

}