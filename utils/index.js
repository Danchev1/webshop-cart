const path = require('path');

/**
 * @function Returns the root directory of the project ( uses the initial file from where the application start )
 * @returns {string}
 */

exports.rootDir = () => path.dirname(process.mainModule.filename);
