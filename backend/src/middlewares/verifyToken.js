const jwt = require('jsonwebtoken');
require('dotenv').config();

function verifyToken(req, res, next) {
  try {
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
      if(error) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      
      req.userId = decoded.id;
      next();
    }); 
  } catch(error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = verifyToken;