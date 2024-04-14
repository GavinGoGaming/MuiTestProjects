import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai';
 
type ResponseData = {
  message: string
}

const BASE_URL = 'https://brainbaseapi.gavingogaming.workers.dev';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // console.log(req.body["messages"]);
    const completion = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(req.body["messages"])
    });
    const data = await completion.json();
    res.status(200).json({ message: data.response });
}