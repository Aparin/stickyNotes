export default function currentId() {
    let id;
    for (id = 1; document.getElementById(id); id++) {}
    return id;
}