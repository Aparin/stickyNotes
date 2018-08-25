export default function editSticker(id) {
    let sticker = document.getElementById(id);
    sticker.addEventListener('dblclick', function() {
        if (sticker.className === 'newSticker') {
            alert('newSticker');
            sticker.classList = 'editSticker';
        } else {
            alert('editSticker');
            sticker.className = 'newSticker';
        }

    });
}