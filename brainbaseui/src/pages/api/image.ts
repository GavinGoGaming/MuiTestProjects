import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = "0000000000"
const BASE_URL = "https://stablehorde.net/api/v2"

var gens: any = {};

type ResponseData = {
    message: string,
    result?: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    var image = "";

    /* STEPS:
    POST /v2/generate/async
    GET /v2/generate/check/{id} until response is "done"
    */
    // Use fetch
    if(req.body.stage == 1) {
        fetch(BASE_URL + "/generate/async", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'apikey': API_KEY
            },
            body: JSON.stringify({
                "prompt": req.body.prompt,
                "params": {
                "height": 512,
                "width": 512
                }
            })
        })
        .then(res => res.json())
        .then(xy => {
            res.send({message: "started", result: xy["id"]})
            gens[xy["id"]] = "incomplete";
            var interval = setInterval(() => {
                fetch(BASE_URL + "/generate/status/" + xy["id"], {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': API_KEY
                    }
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data["done"]);
                    if (data["done"] == true) {
                        image = data["generations"][0]['img'];
                        console.log(image);
                        console.log(xy['id']);
                        gens[xy['id']] = image;
                        clearInterval(interval);
                    }
                })
                .catch(err => console.log(err));
            }, 6000);
        })
    }else if(req.body.stage == 2) {
        console.log("Request made and gave " + gens[req.body.id])
        res.send({message: gens[req.body.id]=="incomplete"?"unfinished":"done", result: gens[req.body.id]});
    }
}