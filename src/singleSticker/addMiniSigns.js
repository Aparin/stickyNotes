export default function addMiniSigns() {
    var fragment = document.createDocumentFragment();

    const edit = document.createElement('img');
    edit.src = 'img/edit_14x10.png';
    edit.classList.add('edit');
    edit.setAttribute('data-action', 'edit');
    fragment.appendChild(edit);

    const del = document.createElement('img');
    del.src = 'img/del_10.png';
    del.classList.add('del');
    del.setAttribute('data-action', 'delete');
    fragment.appendChild(del);

    return fragment;
}