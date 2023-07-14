# ts-node-swc-module-resolution-repro

Repro for https://github.com/TypeStrong/ts-node/issues/2035

# Repro steps

* clone this repo
* run `yarn` to install deps
* run `./node_modules/.bin/ts-node index.ts`
* see failure

Then remove `swc: true` from `tsconfig.json` and run it again to see the success state.
