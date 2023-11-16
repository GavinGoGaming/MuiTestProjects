'use client';
import ProductCard from "@/components/ProductCard"
import { Sheet, CssVarsProvider, Card, CardContent, Typography } from "@mui/joy"


var Products = [
  {
    name: "Nerf JUMPING TARGET (SET OF 3)",
    description: "A jumping nerf target. Great gift for kids and adults. A fun toy for both indoor and outdoor activites and parties!",
    image: "https://i.etsystatic.com/47662651/r/il/884cae/5501787288/il_1588xN.5501787288_d8ly.jpg",
    url: "https://www.etsy.com/listing/1609374725/nerf-jumping-target-set-great-gift-for",
    video: {
      url: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/MainVid_zcucqx.mp4',
      enabled: 'true'
    }
  },
  {
    name: "Nerf JUMPING TARGET (SINGLE)",
    description: "A jumping nerf target. Great gift for kids and adults. A fun toy for both indoor and outdoor activites and parties!",
    image: "https://i.etsystatic.com/47662651/r/il/884cae/5501787288/il_1588xN.5501787288_d8ly.jpg",
    url: "https://www.etsy.com/listing/1609573513/nerf-jumping-target-great-gift-for-kids",
    video: {
      url: 'https://v.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/MainVid_zcucqx.mp4',
      enabled: 'false'
    }
  }
]

export default function Home() {
  return (
    <main>
      <CssVarsProvider defaultMode='dark'>
      <Sheet sx={{borderRadius:'lg',width:'calc(100vw - 50px)',height:'calc(100vh - 50px)',px:'30px',py:'10px',display:'flex',mx:'auto',mt:'20px',justifyContent:'center',alignItems:'middle'}} variant='outlined'>
        <div>
          <div style={{textAlign:'center',position:'relative',height:'fit-content',width:'100%',justifyContent:'center',alignItems:'center'}} id="shkr_logo">
            <img src="/shkrmishstore.png" alt="" height='190' />
            <h3 style={{position:'absolute',width: '100%',bottom: '30px',display:'block'}}><i>Shkrmishshkr's elite tagline goes here.</i></h3>
          </div>
          <Sheet sx={{marginTop:'50px',width:'90vw',height:'70%',borderRadius:'20px',overflowY:'scroll',padding:'20px'}} variant="soft" id="content_box">
            {Products.map((product) => (
              <ProductCard key={product.name.toLowerCase().replaceAll(" ", "_")} name={product.name} description={product.description} url={product.url} image={product.image} video={product.video} />
            ))}
          </Sheet>
        </div>
      </Sheet>
      <div className="footer">
        <div onClick={function(){window.open('https://scratch.mit.edu/users/Bluurii')}}>
          <img src="https://static-00.iconduck.com/assets.00/scratch-icon-367x512-7uovo7mx.png" alt="" height="30px" className="colorWhite" />
        </div>
        <div onClick={function(){window.open('https://www.etsy.com/shop/Shkrmishshkr3DPrints')}}>
          <img src="https://www.stoneedge.com/wp-content/uploads/2020/07/etsy-logo.png" alt="" height="30px" className="colorBlack" />
        </div>
      </div>
      </CssVarsProvider>
    </main>
  )
}
