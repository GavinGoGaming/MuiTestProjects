import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai';
 
type ResponseData = {
  message: string
}

const API_KEY = "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";
const openai = new OpenAI({
    apiKey: API_KEY
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const completion = await openai.chat.completions.create({
        messages: req.body["messages"],
        model: "gpt-3.5-turbo",
    });
    
    var result: any = (completion.choices[0].message.content);

    res.status(200).end(JSON.stringify({message: result}));
}