import Sticker from '../model/Sticker';
import objects from '../model/objects';

export default function load() {
    const objs = localStorage.getItem('objects');
    /*
        for (let i = 1; localStorage.getItem(`H${i}`); i++) {
            let sticker = new Sticker({ name: localStorage.getItem(`H${i}`), content: localStorage.getItem(`C${i}`) });
            sticker.create();
            sticker.show();
            objects.add({ name: localStorage.getItem(`H${i}`), content: localStorage.getItem(`C${i}`) });
        }
        console.log(objects.get());
        */
};