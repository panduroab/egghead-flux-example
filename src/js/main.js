import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Note from './components/note';
import Checkbox from './components/checkbox';
import Board from './components/board';

ReactDOM.render(<Board count={10}/>, document.getElementById('main'));
