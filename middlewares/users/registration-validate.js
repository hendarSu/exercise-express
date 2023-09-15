const registrationValidate = (req, res, next) => {
    const { email, password } = req.body;
    let error = {};

    if (email === null) {
        error = {
            status : "fail",
            message : "Email tidak boleh kosong!"
        }
        res.status(400).json(error);
    } else {
        if (password === null) {
            error = {
                status : "fail",
                message : "password tidak boleh kosong!"
            }
    
            res.status(400).json(error);
        } else {
            next();
        }
    }

    
}

module.exports = registrationValidate;