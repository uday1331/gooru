export enum UserRole {
  EMPLOYEE = "employee",
  EMPLOYER = "employer",
}

export interface User {
  name: string;
  role: UserRole;
  position: string;
  picture: string;
}
