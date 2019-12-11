var express = require('express');
const {
  authorizationMiddleware,
} = require('../middlewares/auth');

var router = express.Router();
const {
  getAllUsers,
  getUsuario,
  registerController,
  loginController,
  logoutController,
} = require('../Controllers/UserController.js');

/* GET users listing. */
router.get('/users', getAllUsers);
router.get('/perfil/:username', getUsuario);
router.post('/register', registerController);
router.post('/login', loginController);
// router.get('/logout', authorizationMiddleware, logoutController);

module.exports = router;
