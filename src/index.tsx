import React from 'react';
import ReactDom from 'react-dom';

import App from './App';




const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);


const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);
