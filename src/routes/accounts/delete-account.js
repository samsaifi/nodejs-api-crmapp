const Joi = require("joi");
const { Accounts } = require("../../models");
const schema = Joi.object({
  _id: Joi.string().required(),
});

const deleteAccount = async (req, res) => {
  const { _id } = req.body;
  try {
    const validate = await schema.validateAsync(req.body);
    const user = await Accounts.findOne({ _id });
    if (!user) {
      return res
        .status(400)
        .send({ status: 400, err: " Could not find account " });
    }
    const msg = await Accounts.deleteOne({ _id });

    return res.status(200).send({ status: 200, msg });
  } catch (err) {
    return res.status(400).send({ status: 400, err: err.message });
  }
};

module.exports = deleteAccount;
