import { Sheet, CssVarsProvider } from "@mui/joy"

export default function Home() {
  return (
    <main>
      <CssVarsProvider defaultMode='dark'>
      <Sheet sx={{borderRadius:'lg',width:'fit-content',px:'30px',py:'10px',display:'flex',mx:'auto',mt:'50px',justifyContent:'center',alignItems:'center'}} variant='outlined'>
        <h1>Shkrmishstore</h1>
      </Sheet>
      </CssVarsProvider>
    </main>
  )
}
