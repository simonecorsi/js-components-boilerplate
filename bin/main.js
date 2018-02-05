import styles from './styles/main.css';
import { toUpperCammelCase } from './libs/helpers';

const PLUGIN_EXPOSED_NAME = toUpperCammelCase(PROJECT_NAME);

if (ENV !== 'production') {
  document.write(`<script src="http://${
    (location.host || 'localhost').split(':')[0]
  }:35729/livereload.js?snipver=1"></` + 'script>');
}

const defaultConfigurations = {};
class Main {
  constructor(configs = {}) {
    this.configs = Object.assign({}, defaultConfigurations, configs);
    this.init();
  }

  /**
   * to avoid importing lodash
   */
  throttle(callback, wait, context = this) {
    let timeout = null;
    let callbackArgs = null;

    const later = () => {
      callback.apply(context, callbackArgs);
      timeout = null;
    };

    return function () {
      if (!timeout) {
        callbackArgs = arguments;
        timeout = setTimeout(later, wait);
      }
    };
  }

  mountComponent() {
    const markup = document.createElement('div');
    markup.classList.add('my-component');
    this.Element = document.body.appendChild(markup);
  }

  bindEvents() {}

  init() {
    this.mountComponent();
    this.bindEvents();
  }
}

// Expose for browser use
if (ENV !== 'production') console.warn(`loading: ${PLUGIN_EXPOSED_NAME}`);
window[PLUGIN_EXPOSED_NAME] = Main;
