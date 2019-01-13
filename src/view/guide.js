import './guide.css';
import popup from './popup';

const guide = () => {
    const messToPopup = `
  <span id="popMess"></span>
  <button id="prev">Назад</button>
  <button id="next">Дальше</button>
`;
    popup({ msg: messToPopup, height: 200 });

    const popMess = document.getElementById('popMess');
    let tab = 0;
    const msg = [
        'Это система создания и хранения коротких записей и поиска по ним',
        'Для создания новой записи нажмите кнопку "Новый", а затем "Добавить стикер"<br>'
    ];

    const hint = () => {
        popMess.innerText = msg[tab];

        switch (tab) {
            case 0:
                prev.style.display = 'none';
                next.style.display = 'block';
                break;
            case 7:
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
        console.log(tab);
        hint();
    };

}

export default guide;