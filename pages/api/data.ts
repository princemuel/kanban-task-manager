// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from 'common';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<typeof data>
) {
  res.status(200).json(data);
}
