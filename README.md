# webpack-global-ponyfill-issue

## Current behavior
Not generated webpack runtime global code in bundled file

## Step
1. npm i
2. node ./addGlobalModule.js
3. npm run build --workspaces
4. See packages/webpack5/dist/bundle.js

## Expected behavior
Expect following code in packages/webpack5/dist/bundle.js
```js
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
```

## If type is commonjs
if change `type` value to commonjs (in ./node_modules/is-global-module/package.json), we can see above code

## fix?

I guess the reason is  not add `javascript/esm` handler  in NodeStuffPlugin.js
[Target code](https://github.com/webpack/webpack/blob/main/lib/NodeStuffPlugin.js#L164)
