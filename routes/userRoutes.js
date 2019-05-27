const router = require("express-promise-router")();
const UserCtrl = require("../controllers/userCtrl");
router.route("/users").get(UserCtrl.usersList);

module.exports = router;