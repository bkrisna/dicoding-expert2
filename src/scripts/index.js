import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import loadData from "./loaddata";
import App from './views/app';

const app = new App({
    button: document.querySelector('#mobile-menu'),
    drawer: document.querySelector('#nav-list'),
    content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});