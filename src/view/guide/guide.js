import './guide.css';
import popup from '../popup';

const guide = () => {
    const messToPopup = `
        <div id="popMess"></div>
        <button id="prev">Назад</button>
        <button id="next">Дальше</button>
        `;
    popup({ msg: messToPopup });

    const popArea = document.getElementById('popup');
    const popMess = document.getElementById('popMess');

    let tab = 0;
    const msg = [
        [150, 'Это система создания и хранения коротких записей и поиска по ним'],
        [220, `Для создания новой записи нажмите кнопку "Новый":
            <img src="./img/guideImg/new.png">
            а затем "Добавить стикер"`],
        [450, `Введите заголовок, напишите запись, введите ключевые слова, нажмите дискету <img src="./img/guideImg/createSticker.png">`],
        [300, `Чтобы редактировать запись нажмите три точки, чтобы удалить - крестик.  <img src="./img/guideImg/sticker.png"> Изменения сохраняться только после нажатия кнопки "Сохранить"`],
        [330, `Для сохранения ваших записей нажмите "Сохранить".  <img src="./img/guideImg/save.png"> В в версии без регистрации, данные сохраняются локально, в браузере вашего смартфона / компьютера, и доступны только с них. <br> При чистке браузера данные будут утеряны`],
        [280, `***** ВАЖНО ***** <br>
        Не храните пароли и конфединциальную информацию в записях. <br>
        В некоторых случаях, например заражение смартфона вирусом, ваши данные могут быть доступны злоумышленникам`],
        [270, `Для поиска по ключевым словам вводите их в поле:  <img src="./img/guideImg/search.png"> Галка в зелёном квадрате добавляет поиск по заголовкам. В оранжевом - добавляет поиск по содержимому`]
    ];
    const msgLength = msg.length;
    const hint = () => {
        popArea.style.height = msg[tab][0] + 'px';
        popMess.innerHTML = msg[tab][1];

        switch (tab) {
            case 0:
                prev.style.display = 'none';
                next.style.display = 'block';
                break;
            case msgLength - 1:
                prev.style.display = 'block';
                next.style.display = 'none';
                break;
            default:
                prev.style.display = 'block';
                next.style.display = 'block';
        };
    };

    hint();

    next.onclick = () => {
        tab++;
        hint();
    };

    prev.onclick = () => {
        tab--;
        hint();
    };
}

export default guide;