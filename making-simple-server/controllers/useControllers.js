import User from "../models/User.js";
import UserRepo from "../Repos/UserRepository.js";

const UserControler = {
  getUsers: async (req, res) => {
    let users = UserRepo.GetAll();
    res.send(users);
  },

  createUser: async (req, res) => {
    const user = { name: "rizwan", age: 23 };
    const newUser = await UserRepo.CreateUser(user);
    res.send("user posted");
  },
};

export default UserControler;
