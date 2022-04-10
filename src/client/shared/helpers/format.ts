export const removeOrAddCharacters = (str: string, character: string) => {
  return str.replace(/[^a-zA-Z ]/g, character);
};
