# throttle-decorator

> ES decorator that make a function throttled.

[![Build Status](https://travis-ci.org/1000ch/throttle-decorator.svg?branch=master)](https://travis-ci.org/1000ch/throttle-decorator)
[![Dependency Status](https://david-dm.org/1000ch/throttle-decorator.svg)](https://david-dm.org/1000ch/throttle-decorator)
[![devDependency Status](https://david-dm.org/1000ch/throttle-decorator/dev-status.svg)](https://david-dm.org/1000ch/throttle-decorator?type=dev)

## Install

```bash
$ npm install --save-dev throttle-decorator
```

## Usage

```javascript
import throttle from 'throttle-decorator';

class Cat {
  @throttle(100)
  meow() {
    console.log('meow');
  }
}
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
