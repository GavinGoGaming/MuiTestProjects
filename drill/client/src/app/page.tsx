import Image from "next/image";
import Serverlist from "./components/Serverlist";
import { CssVarsProvider } from "@mui/joy";
import { useEffect, useState } from "react";
import Serverchatbox from "./components/Serverchatbox";

export default function Home() {

  // const [servers, setItems] = useState([]);

  // useEffect(() => {
  //     const servers = JSON.parse((window.localStorage.getItem('items') as string));
  //     if (servers) {
  //         setItems(servers);
  //     }
  // }, []);
  // useEffect(() => {
  //     window.localStorage.setItem('items', JSON.stringify(servers));
  // }, [servers]);

  return (
    <main>
      <CssVarsProvider defaultMode={"dark"}>
        <Serverlist/>
      </CssVarsProvider>
    </main>
  );
}
