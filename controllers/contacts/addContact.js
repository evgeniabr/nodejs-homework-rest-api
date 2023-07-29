const { Contact } = require("../../models/contact");

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.json({
    status: "success",
    code: 201,
    result,
  });
};

module.exports = addContact;
