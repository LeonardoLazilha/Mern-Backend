import userSchema from "../schema/user.schema";

class UserService {
  async create(user: any) {
    const createdUser = await userSchema.create(user);
    return createdUser;
  }

  async read() {
    const findedUsers = await userSchema.find();
    return findedUsers;
  }

  async update(id: string, newData: any) {
    const updatedUser = await userSchema.findByIdAndUpdate(id, newData, {
      new: true,
    });
    return updatedUser;
  }

  async delete(id: string) {
    const deletedUser = await userSchema.findByIdAndDelete(id);
    return deletedUser;
  }
}

export default new UserService();
