export default function example() {
    const url = 'https://znanion.ru/files/stickyNotes/example.php';

    function httpGet(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.send();
        xhr.onreadystatechange = function() { // (3)
            if (xhr.readyState === 4 && xhr.status === 200) {
                const exampleStickers = xhr.responseText;
                //out2.innerHTML = exampleStickers;
                document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', exampleStickers);
            }
        }
    }
    httpGet(url);
}