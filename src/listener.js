function listener(id, type, func) {

    document.getElementById(id).addEventListener(type, function() {
        func;
    });
}
export default listener;