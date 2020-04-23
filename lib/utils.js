export default function canonicaliseRecipeName(name) {
  return name.replace(/\W/g, '-').replace(/\s/g, '-').toLowerCase();
}
