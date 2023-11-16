export function short(string) {
  if (string == undefined) {
    return '';
  } else {
    return string.substring(0, 300);
  }
}
