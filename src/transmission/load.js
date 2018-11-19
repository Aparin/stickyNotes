import Sticker from '../singleSticker/Sticker';

export default function load() {
    let stickers = [
        ['Вендинги', 'https://docs.google.com/spreadsheets/d/1qkcRwdHjvv1NrA47kc5ndpCKSSGVCLtyHepjCNmP7Gk/'],
        ['Выставки', 'Китайские станки и оборудование: http://www.chinamachineryfair.ru/'],
        ['Облачное видеонаблюдение', 'https://ru.ivideon.com/tarify-dlya-biznesa/'],
        ['К собеседованию JS', `Концепция MVS  https://ruseller.com/lessons.php?id=666

        Agile method: https://habr.com/company/edison/blog/313410/
        
        Scrum:  https://habr.com/post/247319/
        
        Замыкания: https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
        
        Solid: https://getinstance.info/articles/good-code-principles/solid-single-responsibility-javascript/
        
        DRY – Don’t repeat yourself (не повторяй себя)`],
        ['Доход с pushей', 'https://pushprofit.ru/'],
        ['23 шаблона проектирования', 'https://habr.com/post/210288/'],
        ['Agile', 'http://agilemanifesto.org/iso/ru/manifesto.html'],
        ['Методы ООП', `Инкапсуляция,
        Полиморфизм,
        Наследование`],
        ['Алгоритмы сортировки массивов', 'https://infostart.ru/public/204320/']
    ];

    stickers.forEach(elem => {
        let sticker = new Sticker(...elem);
        sticker.create();
        sticker.show();
    });


    /*
    document.getElementById('stickyNotes').insertAdjacentHTML('beforeend', localStorage.getItem('stickers'));
    */
};