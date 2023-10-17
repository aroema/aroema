import React from 'react';
import App from './app/App';
import './index.css';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body)
root.render(React.createElement(App));