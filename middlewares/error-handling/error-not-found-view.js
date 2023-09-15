const errorNotFoundView = (req, res, next) => {
    res.render("404", {
        url : req.url,
        method : req.method
    });
}

module.exports = errorNotFoundView;