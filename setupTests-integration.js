import * as Path from 'path';
import { loggers, TxLogger } from './__tests__/integration/txLogger';

/**
 * Gets the name of the test being executed from a Jasmine's global variable.
 * @returns {string} Test name
 */
function getTestNameFromGlobalJasmineInstance() {
  const { testPath } = jasmine;
  const testFileName = Path.parse(testPath).name;
  return testFileName.indexOf('.') > -1
    ? testFileName.split('.')[0]
    : testFileName;
}

// This function will run before each test file is executed
beforeAll(async () => {
  // Initializing the Transaction Logger with the test name
  const testName = getTestNameFromGlobalJasmineInstance();
  const testLogger = new TxLogger(testName);
  testLogger.init();
  loggers.test = testLogger;
});
