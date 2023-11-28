import { Sheet, Typography } from "@mui/joy";

export default function TitleZone(props: {title: string, mini: string, bottom: string}) {
    return (
        <Sheet sx={{
            width: '100%',
            ml: '0',
            height: '30vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            zIndex: 2,
            boxShadow: 'md',
          }}
          variant="plain">
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',position:'relative'}}>
              <Typography fontSize={50} id="title">{props.title}</Typography>
              <Typography style={{position:'absolute',margin:'auto',marginBottom:'40px',marginRight:'10px'}}>{props.mini}</Typography>
            </div>
            <h5 className='paddingForTinyScreen' style={{textAlign: 'center',fontWeight:'400',color:'#888'}}>{props.bottom}</h5>
          </Sheet>
    );
}