//ES Moudle引入方法
//CommonJS 模块引入规范
//CMD
//ADM
// webpack 模块打包工具
// import Header from './Header.js';
// import Content from './Content.js';
// import Footer from './Footer.js';
// const Header = require('./Header.js');
// const Content = require('./Content.js');
// const Footer = require('./Footer.js');
// const img = require('./user.jpeg')
import user from './user.jpeg';
import './index.css';

let img = new Image();
img.src = user;
img.classList.add('avar');
let doc = document.getElementById('root');
doc.append(img);
// new Header();
// new Content();
// new Footer();