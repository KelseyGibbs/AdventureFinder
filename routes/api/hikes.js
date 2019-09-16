const router = require("express").Router();
const hikesController = require("../../controllers/hikesController");

// Matches with "/api/hikes"
router.route("/")
  .get(hikesController.findAll)
  .post(hikesController.create);

// Matches with "/api/hikes/:id"
router
  .route("/:id")
  .get(hikesController.findById)
  .put(hikesController.update)
  .delete(hikesController.remove);

module.exports = router;

