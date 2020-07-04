import { User, UserRole } from "../types/user";
import profilePic from "./images/profile_pic.jpeg";

const dummyUser1: User = {
  name: "John Doe",
  role: UserRole.EMPLOYER,
  position: "Senior Market Risk Analyst",
  picture: profilePic,
};

const dummyUser2: User = {
  name: "Sebastian Lombart",
  role: UserRole.EMPLOYEE,
  position: "Intern",
  picture: profilePic,
};

const dummyUser3: User = {
  name: "Noah Kim",
  role: UserRole.EMPLOYEE,
  position: "Trainee",
  picture: profilePic,
};

export { dummyUser1, dummyUser2, dummyUser3 };
