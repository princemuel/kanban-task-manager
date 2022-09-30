// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IData } from 'types';
import data from './data.json';

// data.boards.map()

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IData>
) {
  // @ts-expect-error
  res.status(200).json(data);
}
