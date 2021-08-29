export const getRandomNumber = async (): Promise<string> => {
  const res = await fetch('https://svelte.dev/tutorial/random-number');
  const text = await res.text();

  if (res.ok) {
    return text;
  } else {
    throw new Error(text);
  }
}