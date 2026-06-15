export interface User {
  id: string;
  name: string;
  email: string;

  role:
    | "ADMIN"
    | "MEMBER";

  status:
    | "ACTIVE"
    | "INACTIVE";
}