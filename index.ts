import fs from 'fs';

(async function main() {
    console.log('main');

    // Import node-fetch dynamically as it's pure ESM, and our output target is CJS
    // @ts-ignore
    const fetch = await import('node-fetch');

    console.log({ fetch, fs });
})();
