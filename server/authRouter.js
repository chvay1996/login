const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { body } = require("express-validator");

router.post("/registration", controller.registration, [
  body("username", "Имя пользователя не может быть пустым").notEmpty(),
  body("password", "Пароль должен быть больше 4 и меньше 15 символов").isLength(
    { min: 4, max: 15 }
  ),
]);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);

module.exports = router;
