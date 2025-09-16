const UserRepo = {
  GetAll: async () => {
    let data = await User.find({});
    return data;
  },

  CreateUser: async () => {
    const post = new User(user);
    post.save();
    return post;
  },
};

export default UserRepo;
