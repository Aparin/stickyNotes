export default function load() {
    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', localStorage.getItem('stickers'));
};