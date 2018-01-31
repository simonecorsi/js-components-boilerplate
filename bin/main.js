import styles from './styles/main.css'

if (ENV !== 'production') {
  document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
}


const defaultConfigurations = {}
class Main {
  constructor({} = defaultConfigurations) {

  }
}
