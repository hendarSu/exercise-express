const UserModel = require("./model/user.model");

async function main() {
  const user = new UserModel();
  console.log(await user.findByEmail("bob@example.com"));
}
main();
