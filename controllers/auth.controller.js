function getSignup(req, res) {
    res.render('customer/auth/signup');
}

function getLogin(req, res) {
    // TODO
}

module.exports = {
    getSignup: getSignup,
    getLogin: getLogin,
};
