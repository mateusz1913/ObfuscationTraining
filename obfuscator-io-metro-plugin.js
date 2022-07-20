const obfuscator = require('obfuscator-io-metro-plugin');

module.exports = obfuscator(
  {
    // for these option look javascript-obfuscator library options from  above url
    compact: false,
    sourceMap: false,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1,
  },
  {
    runInDev: false /* optional */,
  },
);
