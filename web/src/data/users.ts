import { User, UserRole } from "../types/user";

const dummyUser1: User = {
  name: "John Doe",
  role: UserRole.EMPLOYER,
  position: "Senior Market Risk Analyst",
  picture: "",
};

const dummyUser2: User = {
  name: "Sebastian Lombart",
  role: UserRole.EMPLOYEE,
  position: "Intern",
  picture: "",
};

const dummyUser3: User = {
  name: "Noah Kim",
  role: UserRole.EMPLOYEE,
  position: "Trainee",
  picture: "",
};

export { dummyUser1, dummyUser2, dummyUser3 };
