export function randomChoiceFromArray(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function fetchJson<T>(url: string) {
  const fetchedData = await fetch(url);
  const parsedData = await fetchedData.json();

  return parsedData as T;
}
