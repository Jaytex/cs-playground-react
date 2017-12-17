import chalk from 'chalk';

import {
  testsHead,
  testsTail,
  _executeTests,
  declareTests,
  blockConsole
} from './test-scripts';

export const concatTests = (
  solution,
  codeTail,
  testsBody
) => {
  return blockConsole.concat(
    testsHead,
    solution,
    codeTail ? codeTail : '',
    declareTests,
    testsBody,
    _executeTests,
    testsTail
  );
}

export const logResults = (passed, results, id) => {
  if (!passed) {
    console.log(id + ':')
    results.forEach(t => {
      if (t[0] === 'F') {
        console.log(chalk.red(t));
      } else {
        console.log(t);
      }
    });
  } else {
    console.log(id + ':')
    console.log(results);
  }
}
