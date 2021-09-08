const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'andrei') {
        req.user = { name: 'andrei', id: 6 }
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}


module.exports = authorize;