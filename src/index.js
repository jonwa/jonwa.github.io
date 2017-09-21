import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import json from './data.json'

render(
    <App data={json}/>,
    document.getElementById('app')
);
