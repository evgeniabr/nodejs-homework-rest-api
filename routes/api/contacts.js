const express = require('express');
const ctrl = require("../../controllers/contacts");
const router = express.Router();
const {validateBody} = require("../../middlevares");
const schemas = require ("../../schemas/contacts");

router.get('/',ctrl.listContacts);

router.get('/:id',ctrl.getContactById);

router.post('/', validateBody(schemas.addSchema), ctrl.addContact);

router.delete('/:id', ctrl.removeContact);

router.put('/:id', ctrl.updateContact);

module.exports = router
