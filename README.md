Check out the directories `good` and `bad` and run...

```
$ npm install
$ npm run test
$ npm run test:mocha
```

...in each and check the line numbers. It only seems to be messed up files in `src`, and only when using `npm run test` (which uses `nyc`).
