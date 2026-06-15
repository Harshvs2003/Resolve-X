import { mockUsers } from "@/mocks/users";

export const userService = {
  async getUsers() {
    return mockUsers;
  },
};