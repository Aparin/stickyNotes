import deleteSticker from './deleteSticker';

export default function addDeleteSign(id) {
    const del = document.createElement('img');
    del.src = 'img/del_10.png';
    del.classList.add('del');
    del.addEventListener('click', function() {
        deleteSticker(id);
    });
    return del;
}