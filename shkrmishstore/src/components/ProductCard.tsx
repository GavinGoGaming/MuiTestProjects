'use client';

import { Sheet, CssVarsProvider, Card, CardContent, Typography, Link, CardCover } from "@mui/joy"

export default function ProductCard(props: {name: string, description: string, url: string, image: string, video: {url: string, enabled: string}}) {
  return (
    <Card variant="outlined" sx={{cursor:'pointer'}} onClick={function(){window.open(props.url)}} onMouseEnter={function(){}}>
        <CardCover>
          {props.video.enabled == 'true' ? <video src={props.video.url} autoPlay loop muted style={{width:'100%',height:'100%',objectFit:'cover'}} /> : <img src={props.image} alt="" height='190' />}
        </CardCover>
        <CardContent sx={{backgroundColor:'rgba(0,0,0,0.3)',padding:'12px',py:'80px',height:'calc(100% - 32px)',textShadow:'black 1px 0 10px'}} className="cardcontent_mobile">
            <Typography level="title-lg"><Link>{props.name}</Link></Typography>
            <Typography sx={{width:'50%'}} id="description">{props.description}</Typography>
        </CardContent>
    </Card>
  )
}
