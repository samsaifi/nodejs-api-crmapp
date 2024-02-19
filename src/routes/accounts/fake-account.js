const { Accounts } = require("../../models");
const { faker } = require("@faker-js/faker");

const fakeAccounts = async (req, res) => {
  const { num } = req.params;
  //   console.log(num);

  try {
    let fakeAccountData = [];
    // num = num == 0 ? 1 : num;
    for (let i = 0; i < num; i++) {
      fakeAccountData[i] = {
        name: faker.internet.userName(),
        email: faker.internet.email(),
        role: faker.person.jobTitle(),
      };
    }
    // console.log(fakeAccountData);
    const account = await Accounts.insertMany(fakeAccountData);

    // const account = new Accounts();
    // await account.save();

    return res.status(200).send({ status: 200, fakeAccountData });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send({ status: 400, err: err.message });
  }
};

module.exports = fakeAccounts;
