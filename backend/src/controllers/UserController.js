const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
require('dotenv').config();

class UserController {
  async index(req, res) {
    try {
      const users = await User.find({ admin: true });
      res.status(200).json(users);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);

      if(user) res.status(200).json({ message: 'User deleted!' });
      else res.status(404).json({ message: 'User not found!' });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };

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
          res.status(200).json(user);
        }else {
          res.status(400).json({ message: 'E-mail inválido!' });
        }
      } catch(error) {
        res.status(500).json({ error: error.message });
      }
    }else {
      res.status(400).json({ messsage: 'E-mail informado já em uso!' });
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

      if(user.admin) {
        return res.status(200).json({ token, username: user.name, admin: user.admin, id: user._id });
      }

      return res.status(200).json({ token, username: user.name, admin: user.admin });

    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  };
};

module.exports = new UserController();