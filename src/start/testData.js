export const testObj = { title: "New title" };
export const testState = (() => {
    const ts = [];
    for (let i = 0; i < 4; i += 2) {
        ts[i] = { title: 'Title' + i, content: 'content' + i, keyWords: 'keyword' + i, adress: '' };
        const j = i + 1;
        ts[j] = { title: 'Title' + j, content: 'content' + j, keyWords: 'keyword' + j, adress: 'adress' + j };
    };
    return ts;
})();