import { Complaint } from "@/types/complaint";

export const mockComplaints: Complaint[] = [
  {
    id: "CMP-001",
    title: "AC not working",
    description: "Ward 3 AC stopped working",
    location: "Ward 3",
    priority: "HIGH",
    status: "OPEN",
    createdBy: "Raj Sharma",
    createdAt: "2026-08-01",
  },
  {
    id: "CMP-002",
    title: "Water leakage",
    description: "Water leaking near reception",
    location: "Reception",
    priority: "MEDIUM",
    status: "IN_PROGRESS",
    createdBy: "Amit Kumar",
    createdAt: "2026-08-02",
  },
];