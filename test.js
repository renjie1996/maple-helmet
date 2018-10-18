const helmet = require('./index')

a = {
  b: {
    c: {
      d: 4
    }
  }
}

console.log(helmet(a).b.c.d('333'))