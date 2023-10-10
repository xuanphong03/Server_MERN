const { UserModel } = require("../models/model.js");

const userController = {
  // Add user
  addUser: async (req, res) => {
    try {
      const newUser = new UserModel(req.body);
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  updateUser: async (req, res) => {
    const id = req.params.id;
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        { _id: id },
        {
          name: req.body.name,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
        }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteUser: async (req, res) => {
    const id = req.params.id;
    try {
      const deletedUser = await UserModel.findByIdAndDelete({ _id: id });
      res.status(200).json(deletedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await UserModel.findById({ _id: id });
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  getAllUser: async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = userController;
