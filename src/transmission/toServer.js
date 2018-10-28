// import out from '../out';
import currentData from './currentData.js';

export default function toServer() {
    const localStickers = currentData();
    alert('Функция в разработке')

    /*
    const socket = new WebSocket("ws://miruspeha.bget.ru/stickyNotes.php");

    socket.onopen = function() {
        out("Соединение установлено. ");
        socket.send(localStickers);
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            out(' Соединение закрыто чисто ');
        } else {
            out(' Обрыв соединения '); // например, "убит" процесс сервера
        }
        out(' Код: ' + event.code + ' причина: ' + event.reason);
    };

    socket.onmessage = function(event) {
        out(" Получены данные " + event.data);
    };

    socket.onerror = function(error) {
        out(" Ошибка " + error.message);
    };
    */

    /*
        const myRequest = new Request('http://miruspeha.bget.ru/stickyNotes.php', { method: 'POST', body: localStickers });

        const myURL = myRequest.url;
        const myMethod = myRequest.method; // POST
        const myCred = myRequest.credentials; // same-origin
        const bodyUsed = myRequest.bodyUsed; // true
        fetch(myRequest);
        out('Request to server. Responce status: ' + response.status);
    */

    /*
    const server = new XMLHttpRequest();
    server.open('POST', 'http://miruspeha.bget.ru/stickyNotes.php');
    server.send(localStickers);
    server.onreadystatechange = out(server.readyState); // 1
    */
}