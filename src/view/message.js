const message = mess => {
    const messageField = document.getElementById('inform');
    messageField.innerText = mess;

    function waning() {
        let i = 1;
        const timerId = setTimeout(function go() {
            if (i > 0) setTimeout(go, 200);
            messageField.style.opacity = i;
            i = (i * 10 - 1) / 10;
        }, 100);
    }
    waning();
}

export default message;