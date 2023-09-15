const timeLog = (req, res, next) => {
    console.log(`Time ${Date.now()}`);
    next();
}

module.exports = timeLog;