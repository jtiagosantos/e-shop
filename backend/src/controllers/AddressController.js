const Address = require('../models/Address');

class AddressController {
  async index(req, res) {
    try {
      const addresses = await Address.find({ user_id: req.userId });
      res.status(200).json(addresses);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { body } = req;
      body.user_id = req.userId;
      const address = await new Address(body).save();
      res.status(201).json(address);
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const { body } = req;
      const { id } = req.params;

      body.updated_at = new Date();
      
      const address = await Address.findByIdAndUpdate(id, body, { new: true });
      res.status(200).json({ address });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const address = await Address.findByIdAndDelete(id);
      
      if(address) res.status(200).json({ message: 'deleted Address!' });
      else res.status(404).json({ message: 'Address not found!' });
    } catch(error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AddressController();