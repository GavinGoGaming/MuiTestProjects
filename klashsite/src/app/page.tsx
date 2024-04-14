import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import LoginPane from './components/LoginPane';
import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import HrefButton from './components/HrefBtn';
import ImageCardPanel from './components/ImageCardPanel';
import TitleZone from './components/TitleZone';

export const metadata = {
  title: "Home | Klash",
  description: "A modern software development company planning to revolutionize the industry.",
};
export type Product = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageOnRight: boolean;
  border: [string, string, string];
}
/*
  {
    title: "",
    description: "",
    image: "",
    imageAlt: "Product Image",
    imageOnRight: false,
    border: ['linear','#000','#000']
  },
*/
const products: Product[] = [
  {
    title: "Klash Network",
    description: "KlashKlient is a multipurpose utility Minecraft PVP Client similar to Lunar, Badlion, or Feather. Built on Minecraft Java by our professional scripters.",
    image: "/klashnet.png",
    imageAlt: "Klash Network Image",
    imageOnRight: false,
    border: ['linear','#4300ed','#0b0026']
  },
  {
    title: "Brainbase",
    description: "Brainbase is a unique suite of AI Tools. Brainbase includes Vision for Image Generation, Chatbot for chatting with AI, and more. We make AI easy by giving you full customization (letting you pick models, prompts, and system information).",
    image: "/bbc.png",
    imageAlt: "Brainbase Image",
    imageOnRight: true,
    border: ['linear','#999','#333']
  },
  {
    title: "Ultshare Embeds",
    description: "Ultshare (prev. Scrschare) is a utility tool to embed scratch (and more) studios and projects in apps like Discord, Twitter/X, etc. Simply replace scratch.mit.edu with scrschare.fly.dev and you're done!",
    image: "/scrschare.png",
    imageAlt: "Product Image",
    imageOnRight: false,
    border: ['linear','#ffbf9b','#F75A01']
  }
];

export default function Page() {
  return (
    <CssVarsProvider defaultMode='dark'><main>
      <Navigation/>
      <TitleZone bottom="A modern software development company planning to revolutionize the industry." mini="We are" title="KlashDevelopment" key='title'/>
      <Sheet sx={{marginTop:'10px',width:'100%'}}>
        {products.map((product) => (
          <ImageCardPanel key={product.title.replaceAll(" ", "_").toLowerCase()} title={product.title} description={product.description} image={product.image} imageAlt={product.imageAlt} imageOnRight={product.imageOnRight} border={product.border}/>
        ))}
      </Sheet>
   </main></CssVarsProvider>
  );
}