const router = require("express").Router();
const controller = require("../controllers/user.controller");
const { verifyToken, checkRole } = require("../middleware/auth.middleware");

// 🔐 ADMIN ONLY
router.get("/", verifyToken, checkRole("ADMIN"), controller.getAll);

router.post("/", verifyToken, checkRole("ADMIN"), controller.create);

router.get("/count", verifyToken, checkRole("ADMIN"), controller.getCount);

module.exports = router;