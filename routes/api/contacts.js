const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();

const { validateBody } = require("../../middlewares");
const { ctrlWrapper } = require("../../helpers");

const schemas = require("../../schemas/contact");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validateBody(schemas.addSchema), ctrlWrapper(ctrl.add));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  ctrlWrapper(ctrl.updateById)
);

module.exports = router;
