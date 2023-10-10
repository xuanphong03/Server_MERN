const router = require("express").Router();
const userController = require("../controllers/userController.js");

// Add user
router.post("/create", userController.addUser);

// Update user
router.put("/update/:id", userController.updateUser);

// Delete user
router.delete("/deleteUser/:id", userController.deleteUser);

// Get user
router.get("/getUser/:id", userController.getUser);

// Get all user
router.get("/", userController.getAllUser);

module.exports = router;
