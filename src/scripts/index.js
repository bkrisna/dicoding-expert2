import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './views/widgets/nav-bar';
import './views/widgets/footer-bar';
import './views/widgets/hero-bar';
import './views/widgets/resto-detail-element';

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
    swRegister();
});