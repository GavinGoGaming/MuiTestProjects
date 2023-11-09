import type { NextApiRequest, NextApiResponse } from "next";
import { marked } from 'marked';

type ResponseData = {
    result: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    res.status(200).json({result: marked(req.body)});
}