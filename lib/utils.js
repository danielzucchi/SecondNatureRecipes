export default function canonicaliseName(name) {
  return name.replace(/\W/g, '-').replace(/\s/g, '-').toLowerCase();
}
