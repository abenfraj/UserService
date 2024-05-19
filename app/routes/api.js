const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CRUD operations
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.post("/signup", userController.createUser);
router.post("/signin", userController.signIn);

module.exports = router;
