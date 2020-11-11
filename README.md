## Goal
A javascript challenge to re-implement [underscore functions](https://underscorejs.org/) in order to practice javascript skill.

## How
```
npm install
```

The approach is test driven:

1. Add tests to test.js
2. Implement a function in lib.js and pass all the tests:

```
node test.js
```

It should print all passed! if all tests passed.

## Debugging
In order to debug in browser with line breaker, add debugger before the line that you want to pause at, then run:

```
node --inspect-brk test.js
```

Open chrome dev tool, click on the green bottom to open the decidated dev tool to launch the debugging environment. After that, you can debug the tests and the code just like debugging javascript in the browser.


## Progress
- [x] _.first
