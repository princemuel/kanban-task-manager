export const clean = (data: string) => {
  return data?.replace(/[|&;$%@"<>()\\+,]/g, '');
};
