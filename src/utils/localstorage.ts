export const getFromLocalstarage = (item: string) => {
  const favorite = localStorage.getItem(item) || "[]";
  return JSON.parse(favorite);
};

export const setToLocalstarage = (name: string, item: any) => {
  localStorage.setItem(name, JSON.stringify(item));
};
