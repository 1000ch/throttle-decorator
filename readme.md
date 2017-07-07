# throttle-decorator

> ES decorator that make a function throttled.

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
