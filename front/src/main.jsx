import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// PAGE
import RoutePath from './RoutePath';
import { BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// FONTAWESOME

library.add(fas, fab);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <RoutePath />
    </Router>
  </React.StrictMode>
);
