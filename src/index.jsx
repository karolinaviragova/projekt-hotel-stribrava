import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import './global.css';
import { AdminPage } from './pages/AdminPage';

createRoot(
  document.querySelector('#app'),
).render(<AdminPage />);
