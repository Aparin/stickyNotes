import './message.css';

const message = (mess, color = 'darkgreen', time = 2000) => {
  const messageField = document.getElementById('inform');
  messageField.innerText = mess;
  messageField.style.color = color;

  function waning() {
    let i = 1;
    // eslint-disable-next-line no-unused-vars
    const timerId = setTimeout(function go() {
      if (i > 0) setTimeout(go, time / 10);
      messageField.style.opacity = i;
      i = (i * 10 - 1) / 10;
    }, 100);
  }
  waning();
};

export default message;
