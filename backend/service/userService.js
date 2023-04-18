const bcrypt = require('bcrypt');
const User = require('../model/user');

const register = async (firstName, lastName, email, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  console.log('userinfo service', firstName, lastName, email, password)
  let user = new User({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });
  return user.save();

}
const login = async (email, password) => {

  const filter = {
    email
  };
  console.log('Filter ', filter, password);
  const user = await User.findOne(filter);
  if (user) {
    console.log('email ', email, " Password ", user.password);
    const validPass = await bcrypt.compare(password, user.password);
    if (validPass) {
      return user;
    }
    else {
      throw Error("Invalid user or password");
    }
  }
  throw Error("Invalid user or password");;
};
const getUserById = (userId) => {
  return {
    userId: userId,
    name: "Some data from DB"
  }
};
module.exports = {
  getUserById,
  register,
  login,
}