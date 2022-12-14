const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.header('auth-token')|| req.header('Authorization');

    if (!token) {
        return res.status(403).send("Error 403 -  A token is required for authentication ");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Error 401 - Invalid Token");
    }
    return next();
};

module.exports = verifyToken;