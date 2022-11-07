export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const clean = (data: string) => {
  return data?.replace(/[|&;$%@"<>()\\+,]/g, '');
};
