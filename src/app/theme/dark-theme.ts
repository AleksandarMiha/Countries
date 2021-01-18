import { Theme } from './symbols';

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
    '--background': 'hsl(207, 26%, 17%)',
    '--background-header-lighter': 'hsl(209, 23%, 22%)',
    '--on-background': '#fff',
    '--primary': 'white',
    '--on-primary': '#fff',
    '--gray-placeholder': 'white',
  }
} 

// - Dark Blue (Dark Mode Elements): hsl(209, 23%, 22%)
// - Very Dark Blue (Dark Mode Background): hsl(207, 26%, 17%)
// - Very Dark Blue (Light Mode Text): hsl(200, 15%, 8%)
// - Dark Gray (Light Mode Input): hsl(0, 0%, 52%)
// - Very Light Gray (Light Mode Background): hsl(0, 0%, 98%)
// - White (Dark Mode Text & Light Mode Elements): hsl(0, 0%, 100%)