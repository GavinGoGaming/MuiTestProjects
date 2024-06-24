"use client";
import { ContentCopy } from "@mui/icons-material";
import { Button, CssVarsProvider, Input, Sheet } from "@mui/joy";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SkinViewer } from "skinview3d";

declare var skinview3d: any;

export default function Home() {
  const [user, setUser] = useState("");
  const [uuid, setUuid] = useState("");
  const [skin, setSkin] = useState("");

  function refreshData() {
      fetch("https://playerdb.co/api/player/minecraft/"+user)
      .then((res) => res.json())
      .then((data) => {
        setSkin(data.data.player.skin_texture);
        setUuid(data.data.player.id);
      });
    }

    function SkinModel() {
      return (
        <>
          <img src={`https://crafatar.com/renders/body/${uuid}`} style={{width:'60%',marginLeft:'20%'}}/>
        </>
      );
    }

  function SimpleStatInt({name, icon="", value}: {name: string, icon?: string, value: number}) {
    return (
      <Sheet style={{display:'flex',justifyContent:'space-between',margin:'5px',padding:'10px',borderRadius:'10px'}} variant="outlined">
        <div style={{display:'flex',alignItems:'center'}}>
          <span style={{paddingRight:'5px'}}>
        {icon ? <ItemIcon name={icon} /> : null}</span>
        <span style={{paddingRight:'5px'}}>{name}</span></div>
        <div style={{display:'flex',alignItems:'center'}}><span style={{paddingRight:'5px'}}>{value}</span> <ContentCopy onClick={()=>{navigator.clipboard.writeText(value.toString())}}
         htmlColor={"#ffffff"} style={{width:"20px",height:"20px",cursor:"pointer"}}/> </div>
      </Sheet>
    );
  }
  function SimpleStatString({name, icon="", value}: {name: string, icon?: string, value: string}) {
    return (
      <Sheet style={{display:'flex',justifyContent:'space-between',margin:'5px',padding:'10px',borderRadius:'10px'}} variant="outlined">
        <div style={{display:'flex',alignItems:'center'}}>
          <span style={{paddingRight:'5px'}}>
        {icon ? <ItemIcon name={icon} /> : null}</span>
        <span style={{paddingRight:'5px'}}>{name}</span></div>
        <div style={{display:'flex',alignItems:'center'}}><span style={{paddingRight:'5px'}}>{value}</span> <ContentCopy onClick={()=>{navigator.clipboard.writeText(value.toString())}}
         htmlColor={"#ffffff"} style={{width:"20px",height:"20px",cursor:"pointer"}}/> </div>
      </Sheet>
    );
  }
  function ItemIcon({name}: {name: string}) {
    return (
      <img src={`https://mcapi.marveldc.me/item/${name}?version=1.21&width=128&height=128&fuzzySearch=bool`} style={{width:'30px',height:'30px'}}/>
    );
  }

  return (
    <main>
      <CssVarsProvider defaultMode="dark">
        <div style={{display:'flex',height:'100%'}}>
          <Sheet sx={{ display: "flex", width: "30%", height:'calc(100% - 20px)', flexDirection:'column', padding:'10px', margin:'10px', borderRadius:'10px',justifyContent:'flex-start',textAlign:'center' }} variant="outlined">
          <Input placeholder="Enter a Minecraft Username..." onChange={(e)=>{setUser(e.target.value)}} endDecorator={<Button onClick={()=>{refreshData()}}>Load</Button>}/>
            <h3>Occulto Stats{user ? " for " + user : ""}</h3>
            <br/>
            <SkinModel/>
          </Sheet>
          <Sheet sx={{display: "flex", width: "70%", height:'calc(100% - 20px)', flexDirection:'column', padding:'10px', margin:'10px', borderRadius:'10px',justifyContent:'flex-start',textAlign:'center' }} variant="outlined">
            <div style={{display:`${uuid ? 'grid' : "none"}`,overflow:'scroll'}}>
              <h3>Statistics</h3>
              <SimpleStatInt icon="apple" name="Health" value={1}/>
              <SimpleStatInt icon="iron_hoe" name="Blocks Farmed" value={1}/>
              <SimpleStatInt icon="iron_axe" name="Blocks Woodcut" value={1}/>
              <SimpleStatInt icon="iron_pickaxe" name="Blocks Mined" value={1}/>
              <SimpleStatInt icon="iron_sword" name="Mobs Killed" value={1}/>
              <SimpleStatInt icon="fishing_rod" name="Items Fished" value={1}/>
              <SimpleStatInt icon="enchanted_book" name="Items Enchanted" value={1}/>
              <h3>Dungeon Completions</h3>
              <SimpleStatInt icon="rotten_flesh" name="Rotton Slum" value={1}/>
              <h3>Skills</h3>
              <SimpleStatInt icon="gold_sword" name="Combat Level" value={1}/>
              <SimpleStatInt icon="gold_hoe" name="Farming Level" value={1}/>
              <SimpleStatInt icon="gold_pickaxe" name="Mining Level" value={1}/>
              <SimpleStatInt icon="gold_axe" name="Woodcutting Level" value={1}/>
              <SimpleStatInt icon="enchanting_table" name="Enchanting Level" value={1}/>
              <SimpleStatInt icon="fishing_rod" name="Fishing Level" value={1}/>
            </div>
          </Sheet>
        </div>
      </CssVarsProvider>
    </main>
  );
}
