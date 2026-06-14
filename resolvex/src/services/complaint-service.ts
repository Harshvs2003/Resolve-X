import { mockComplaints } from "@/mocks/complaints";

export const complaintService = {
  async getComplaints() {
    return mockComplaints;
  },
};
