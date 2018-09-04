export default function out(data) {
    const element = document.createElement('span');
    element.textContent = data + ' ';
    document.getElementById('out').appendChild(element);
};