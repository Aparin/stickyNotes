const error = (module, err) => {
    console.log(`В коде модуля "${module}" ошибка "${err.name}": ${err.message}`);
    document.body.insertAdjacentHTML('beforeend',
        `<p style="color: red">В коде модуля <b>"${module}"</b> ошибка "${err.name}": ${err.message}
      </p>`);
}

export default error;