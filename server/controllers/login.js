const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/Users');
const Place = require('../models/Places');

module.exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.query.email });
    if (user) {
        const passwordResult = bcrypt.compareSync(
            req.query.password,
            user.password
        );
        if (passwordResult) {
            const token = jwt.sign(
                {
                    email: user.email,
                    userId: user._id,
                },
                keys.jwt,
                { expiresIn: 60 * 60 }
            );
            res.status(200).json({
                token: token,
            });
        } else {
            res.status(401).json({
                message: 'Не правильный пароль',
            });
        }
    } else {
        res.status(401).json({
            message: 'Учетной записи с таким email не существует',
        });
    }
};
