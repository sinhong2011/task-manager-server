const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'thisismynewcourse');
    // console.log(decoded)
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
    // console.log(user)
    if (!user) {
      throw new Error();
    }
    // console.log(req)
    req.user = user;
  } catch (error) {
    res.status(401).send({ error: 'Please auth' });
  }

  next();
};

module.exports = auth;
