import { mockRooms } from "@/mocks/rooms";

export const roomService = {
  async getRooms() {
    return mockRooms;
  },
};