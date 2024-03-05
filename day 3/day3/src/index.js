//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom/client'

const jsxElement = <h1>This is a JSX element</h1>
const title = <h2>Getting Started React</h2>

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

const res=[jsxElement,title];

rootElement.render(res);