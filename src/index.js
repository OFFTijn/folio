import { createRoot } from 'react-dom/client';  // Import from 'react-dom/client'
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';

// Create a root and use `root.render` instead of `render`
const root = createRoot(document.getElementById('root')); 
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
