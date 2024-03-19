import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  pms: any[],
  servers: any[]
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ pms: [{name: 'alec', messages: [
    {from: 'alec', message: 'whats drill?'},
    {from: '', message: 'hello'}]}], servers: []1`` })
}