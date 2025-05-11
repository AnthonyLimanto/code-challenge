import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    // Sunset Orange
    primary: {
      main: '#E86100',  
      // Approx. “Spanish Orange” for Origin’s sunset tone :contentReference[oaicite:0]{index=0}
    },
    // Ocean Blue
    secondary: {
      main: '#005EB8',
      // Standard “Ocean Blue” code :contentReference[oaicite:1]{index=1}
    },
    // Grass Green
    success: {
      main: '#78BE20',
      // “Dark Lemon Lime” / “Aurora Green” used in nature palettes :contentReference[oaicite:2]{index=2}
    },
    // Earth Brown (for zero or warning states)
    warning: {
      main: '#8B572A',
      // “Glazed Ginger” brown to evoke earth/soil :contentReference[oaicite:3]{index=3}
    },
    // Optional grey scale overrides:
    grey: {
      500: '#9E9E9E', // default mid-grey from Material palette :contentReference[oaicite:4]{index=4}
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
})

export default theme
