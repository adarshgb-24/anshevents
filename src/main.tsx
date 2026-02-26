import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // React 18
// import ReactDOM from 'react-dom'; // Uncomment this if you're using React 17 or below

import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // For React 18
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}

// For React 17 or below, use the following:
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
