export const removeOrAddCharacters = (str: string, character: string) => {
  return str.replace(/[^a-zA-Z ]/g, character);
};

export const capitalizeFirstLetter = (str: string) =>
  (str && str[0].toUpperCase() + str.slice(1)) || "";
