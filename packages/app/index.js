const { sayHello } = require('@mono-repo-pnpm/common');
// const { getNumberSum } = require('@mono-repo-pnpm/utils');
const { defaults } = require('lodash');
console.log(sayHello('Monorepo'));
console.log(defaults({ a: 1 }, { b: 2 }));
// console.log(getNumberSum(1, 2));
