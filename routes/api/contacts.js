const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const {
  validateBody,
  isValidId,
  authentificate,
} = require("../../middlevares");
const { schemas } = require("../..///models/contact");

router.get("/", authentificate, ctrl.listContacts);

router.get("/:id", authentificate, isValidId, ctrl.getContactById);

router.post(
  "/",
  authentificate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);

router.delete("/:id", authentificate, isValidId, ctrl.removeContact);

router.put(
  "/:id",
  authentificate,
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:id/favorite",
  authentificate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
