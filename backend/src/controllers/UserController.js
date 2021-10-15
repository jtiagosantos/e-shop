const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
require('dotenv').config();

class UserController {
  async register(req, res) {
    const body = req.body;
    const { email } = req.body;
    const user = await User.findOne({ email });

    if(!user) {
      try {
        const isValidEmail = validator.isEmail(email);

        if(isValidEmail) {
          body.password = bcrypt.hashSync(body.password, 10);
          const user = await new User(body).save();
          res.status(200).json({ error: false, user });
        }else {
          res.status(400).json({ message: 'E-mail inválido!' });
        }
      } catch(error) {
        res.status(500).json({ error: error.message });
      }
    }else {
      res.status(200).json({ messsage: 'E-mail informado já em uso!' });
    }
  };

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });

      if(!user) {
        return res.status(401).json({ message: 'E-mail e/ou senha incorretos!' });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);

      if(!isValidPassword) {
        return res.status(401).json({ message: 'E-mail e/ou senha incorretos!' });
      }
    
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });

      delete user.password;

      return res.status(200).json({ token });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = new UserController();