import Alert from './src/main';

/* istanbul ignore next */
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert);
  console.log('aaa')
};

export default Alert;
