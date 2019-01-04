import state from './state';

export default function filter(searchStr, titleCheck, contentCheck) {
    for (let i = 1; true; i++) {
        if (!document.getElementById(i)) { break };
        document.getElementById(i).style.display = 'inline-block';
    }
    const arr = state.get();

    const newArr = [];
    arr.map((element, index) => {
        let selector = 0;

        if (titleCheck && contentCheck) {
            selector = 3;
        } else if (titleCheck) {
            selector = 1;
        } else if (contentCheck) {
            selector = 2;
        }

        // We will hide those stickers that do not match the search.
        const sStr = searchStr.toLowerCase();
        const inKey = !~element.keyWords.toLowerCase().indexOf(sStr);
        const inTitle = !~element.title.toLowerCase().indexOf(sStr);
        const inContent = !~element.content.toLowerCase().indexOf(sStr);

        switch (selector) {
            case 0:
                if (inKey) newArr.push(index);
                break;

            case 1:
                if (inKey && inTitle) newArr.push(index);
                break;

            case 2:
                if (inKey && inContent) newArr.push(index);
                break;
            case 3:
                if (inKey && inTitle && inContent) newArr.push(index);
                break;
        }

    });

    newArr.map((value) => {
        document.getElementById(value + 1).style.display = 'none';
    });
}