Run `npm install` then `npm test` to see the following output:

```
  1) Some silly library
       should format a string:
     Error: not yet implemented
      at Object.format (src/index.ts:1:1865)
      at Context.<anonymous> (src/test/index.test.ts:1:2007)
```

The line numbers are incorrect for both chunks of the stack trace :(
