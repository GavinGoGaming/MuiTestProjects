import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main style={{backgroundColor:'#333',height:'100vh'}}>
      <div id="fullwidthmobile" style={{height:'100%'}}>
        <center>
        <div style={{width:'100%',backgroundColor:'#000',minHeight:'100px',paddingTop:'30px'}}>
        <img src="/Logo.png" style={{width:'70%',backgroundColor:'#000'}} alt="" />
        </div>
          <div className="_divv">
            <h1>Welcome to Freddy's</h1>
            <h2>A slender-man and dead by daylight style FNAF fangame</h2>
            <button>Watch Trailer</button>
            <button>Download</button>
          </div>
        </center>
      </div>
    </main>
  )
}
