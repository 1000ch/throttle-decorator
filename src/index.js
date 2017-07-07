import throttle from 'lodash.throttle';

export default function(wait, options = {}) {
  return function(target, name, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function() {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, wait, options)
        });

        return this[name];
      }
    };
  }
}
