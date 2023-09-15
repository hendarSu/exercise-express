const errorNotFound = (req, res, next) => {
    res.status(404).json(
        {
            status: "fail",
            message : "Not Found"
        }
    )
}

module.exports = errorNotFound;