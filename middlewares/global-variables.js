var pkg = require('../package.json');
module.exports = function(req, res, next) {
    res.locals.appVersion = pkg.version;
    res.locals.appName = pkg.name;
    next();
};