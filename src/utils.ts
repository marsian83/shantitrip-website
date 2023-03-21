export function randomChoiceFromArray(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
