import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// My Components CSS
import '../styles/components/navbar.css';
import '../styles/components/hero.css';
import '../styles/components/footer.css';

// My Templates CSS
import '../styles/templates/root.css';
import '../styles/templates/main.css';
import '../styles/templates/loader.css';
import '../styles/templates/detail.css';
import '../styles/templates/favorite.css';

// My CSS
import '../styles/normalize.css';
import '../styles/responsive.css';

// My Components
import './components/navbar';
import './components/hero';
import './components/footer';

// My JavaScript
import App from './views/App';
import swRegister from './utils/sw-register';
import CONFIG from './global/config';

// Initiator
import { WebSocketInitiator } from './utils/initiator/websocket-initiator';

// init App
const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
