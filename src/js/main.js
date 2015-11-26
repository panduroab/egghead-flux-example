import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Box from './components/box';

ReactDOM.render(<Box />, document.body);
var getRidOfBox = document.getElementsByTagName('div')[0];
getRidOfBox.onclick = function(){
    ReactDOM.unmountComponentAtNode(document.body);
    alert('Component is unmounted');
}
