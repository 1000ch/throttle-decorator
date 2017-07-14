import test from 'ava';
import delay from 'delay';
import throttle from '../lib';

class Test {
  constructor() {
    this.foo = null;
    this.bar = null;
    this.timerId = null;
  }

  setUp() {
    this.foo = 0;
    this.bar = 0;

    this.timerId = setInterval(() => {
      this.incrementFoo();
      this.incrementBar();
    }, 100);
  }

  tearDown() {
    if (this.timerId === null) {
      return;
    }

    clearInterval(this.timerId);
  }

  @throttle(300)
  incrementFoo() {
    this.foo++;
  }

  incrementBar() {
    this.bar++;
  }
}

test('test', async t => {
  const instance = new Test();
  instance.setUp();

  t.is(instance.foo, 0);
  t.is(instance.bar, 0);

  await delay(1000);

  t.is(instance.foo, 3);
  t.is(instance.bar, 9);

  instance.tearDown();
});