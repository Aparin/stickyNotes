import objects from './objects';
import clear from '../control/clear';
import Sticker from './Sticker';

export default function filter(str) {
    for (let i = 1; true; i++) {
        if (!document.getElementById(i)) { break };
        document.getElementById(i).style.display = 'inline-block';
    }
    const arr = objects.get();
    const newArr = [];
    arr.map((value) => {
        if (!~value.keyWords.indexOf(str)) newArr.push(value.id);
    });

    newArr.map((value) => {
        document.getElementById(value).style.display = 'none';
    });
}