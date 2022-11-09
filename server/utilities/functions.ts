export const parse = <T extends string>(data: T) => JSON.parse(data) as T;

export const toUtf8 = <T extends string>(data: T) =>
  Buffer.from(data, 'base64').toString('utf-8');

export const toBase64 = <T extends string>(data: T) =>
  Buffer.from(data).toString('base64');
