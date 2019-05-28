export default function currentId() {
  let id;
  // eslint-disable-next-line no-empty
  for (id = 1; document.getElementById(id); id += 1) {}
  return id;
}
