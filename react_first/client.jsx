const React = require('react');
const ReactDom = require('react-dom');
const WordRelay = require('./WordRelay');
const {hot} = require('react-hot-loader/root'); //react-hot-loader/root 가져온 놈중 같은 필드명은 담아진다.
const Hot = hot(WordRelay);


ReactDom.render(<Hot/>, document.querySelector('#root'));