'use client';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Props } from './types';

export function ThemeProvider({ children }: Props) {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#FF14B9',
        main: '#FFFFFF3B',
        dark: '#FFFFFF',
        contrastText: '#fff'
      },
      secondary: {
        light: '#FF14B9',
        main: '#FFFFFF3B',
        dark: '#FFFFFF',
        contrastText: '#fff'
      }
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
