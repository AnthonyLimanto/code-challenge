import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    // Sunset Orange
    primary: {
      main: '#E86100',  
      // “Spanish Orange” 
    },
    // Ocean Blue
    secondary: {
      main: '#005EB8',
      // Standard “Ocean Blue” 
    },
    // Grass Green
    success: {
      main: '#78BE20',
    },
    // Earth Brown (for zero or warning states)
    warning: {
      main: '#8B572A',

    },
    // Optional grey scale overrides:
    grey: {
      500: '#9E9E9E', // default mid-grey from Material palette
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
})

export default theme
