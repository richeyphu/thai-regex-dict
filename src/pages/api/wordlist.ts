// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import ThaiWordlist from "../../common/thaidict.json";

type Data = string[];

const queryResult = (value: string) => {
  const regex: RegExp = RegExp(value);
  return ThaiWordlist.filter((word: string) => regex.test(word));
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { query } = req;
  if (query.q) {
    res.status(200).json(queryResult(String(query.q)));
  } else {
    res.status(200).json(ThaiWordlist);
  }
}
