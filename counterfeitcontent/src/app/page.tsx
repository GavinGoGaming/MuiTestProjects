'use client';
import { Button, CssVarsProvider, Sheet } from "@mui/joy";

export default function Home() {
  return (
    <main>
      <CssVarsProvider defaultMode="dark">
        <Sheet sx={{width:'100%',height:'100vh'}}>
          <Sheet sx={{width:'100%',height:'20vh',display:'flex',alignItems:'center',justifyContent:'center',textDecoration:'underline'}}>
            <h1>Counterfeit Content</h1>
          </Sheet>
          <Sheet variant="outlined" sx={{width:'60vw',minHeight:'400px',marginLeft:'20vw',borderRadius:'lg',padding:'30px',display:'flex'}} className="decard">
            <div style={{width:'45%',height:'100%',display:'inline'}} className="leftside">
              <h1>Designing Empires</h1>
              <p>
                <b>Series Premiere: 2/25</b><br/>
              Set a long time ago, in a galaxy far far away, Designing Empires follows intrepid design agency Empathos, whose account with the Galactic Empire has been placed under review following the epic failure of a certain space station exhaust port.
              <br/><br/>
              Armed with a mood board, a wild-eyed creative director, and a trusty HR droid, this ragtag team of designers, engineers and middle managers attempts to save their account (and their lives) with the biggest pitch of their lives... a total galactic re-brand.</p>
              <br/>
              <Button color="primary" onClick={function(){window.open("//designingempires.com")}} sx={{display:'inline-flex',justifyContent:'center'}}>Website <i style={{marginLeft:'5px'}} className="fa-light fa-globe"></i></Button>
              <Button color="danger" onClick={function(){window.open("//www.youtube.com/@designingempires")}} sx={{marginLeft:'10px',display:'inline-flex',justifyContent:'center'}}>YouTube <i style={{marginLeft:'5px'}} className="fa-brands fa-youtube"></i></Button>
            </div>
            <div style={{marginLeft:'5%',width:'50%',height:'100%',display:'inline-flex'}} className="rightside">
              <iframe width="560" height="315" style={{border:'0.2vw solid white'}} src="https://www.youtube-nocookie.com/embed/TiJbeO0mbZk?si=3105pg12Pbi-mOex&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
          </Sheet>
        </Sheet>
      </CssVarsProvider>
    </main>
  );
}
