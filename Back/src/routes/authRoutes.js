const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const profileController = require("../controllers/profileController");

router.post("/user/login", authController.userLogin);

router.post("/user/create", userController.createUser);

router.post("/redefinirsenha/:email", userController.passwordReset);

router.post('/redefinirsenha', authController.redefinirSenha);

router.post('/atualizarsenha', authController.trocarSenha);
router.get("/user", authMiddleware, userController.findUserAuthenticated);

// Rota para obter o perfil
router.get("/profile/:userId", authMiddleware, profileController.getProfile);

// Rota para criar um perfil
router.post("/profile", authMiddleware, profileController.createProfile);

// Rota para atualizar um perfil
router.patch(
  "/profile/:userId",
  authMiddleware,
  profileController.updateProfile
);

module.exports = router;
