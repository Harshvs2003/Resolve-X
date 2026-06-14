export type ComplaintStatus =
  | "OPEN"
  | "IN_PROGRESS"
  | "RESOLVED"
  | "VERIFIED";

export type Priority =
  | "LOW"
  | "MEDIUM"
  | "HIGH";

export interface Complaint {
  id: string;
  title: string;
  description: string;
  location: string;
  priority: Priority;
  status: ComplaintStatus;

  createdBy: string;

  createdAt: string;
}