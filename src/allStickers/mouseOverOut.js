export default function mouseOverOut(id) {
    let el = document.getElementById(id);
    el.addEventListener('mouseover', function() {
        el.style.background = 'white';
    });
    el.addEventListener('mouseout', function() {
        el.style.background = 'linear-gradient(to top, grey, white)';
    });
}