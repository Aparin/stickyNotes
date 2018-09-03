export default function currentId() {
    for (var id = 1; document.getElementById(id); id++) {}
    return id;
}