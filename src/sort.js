import { out } from './out';

function sort() {
    // out('this is sort function');
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;
    let numStickInCol = Math.floor((height - 100) / 30);
    // out(numStickInCol);
    for (let i = 1; i < numStickInCol; i++) {
        var exist = document.getElementById(i);
        if (!exist === false) {
            exist.style.top = 20 + i * 50 + 'px';
            exist.style.left = 5 + 'px';
            exist.style.zIndex = i;
        } else { break; }
    }
}

export { sort };