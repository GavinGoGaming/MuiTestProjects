'use client';
import { ThemeProvider } from "@emotion/react"
import { CssVarsProvider, extendTheme } from "@mui/joy";
import SessionProvider from "./SessionProvider";

var theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    "100": "#622004",
                    "200": "#943005",
                    "300": "#c54007",
                    "400": "#F86C30",
                    "500": "#f8733a",
                    "600": "#fa966b",
                    "700": "#F86C30",
                }
            }
        }
    }
});

export default function Root({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <CssVarsProvider defaultMode="dark" theme={theme}>
            <ThemeProvider theme={theme}>
                <SessionProvider>
                    {children}
                </SessionProvider>
            </ThemeProvider>
        </CssVarsProvider>
    )
  }
  