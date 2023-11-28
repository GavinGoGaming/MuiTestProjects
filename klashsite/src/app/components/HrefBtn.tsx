'use client';

import * as React from 'react';
import { ColorPaletteProp, CssVarsProvider, VariantProp, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Image from 'next/image';
import Button, { ButtonPropsVariantOverrides, ButtonPropsColorOverrides } from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton'
import Link from '@mui/joy/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NoAccountsIcon from '@mui/icons-material/NoAccounts';
import { OverridableStringUnion } from "@mui/types";

export default function HrefBtn(props: {url:string,faSize?:number,content:string,variant:OverridableStringUnion<VariantProp, ButtonPropsVariantOverrides>,color:OverridableStringUnion<ColorPaletteProp, ButtonPropsColorOverrides>}) {
  return (
      <Button color={props.color} onClick={function(){window.location.href=props.url}} variant={props.variant}>{props.content.startsWith('fa') ? <i style={{fontSize: props.faSize+'px'}} className={props.content}></i> : props.content}</Button>
  );
}