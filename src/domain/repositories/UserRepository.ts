import { User } from "@domain/entities/User";

export interface UserRepository {
  getUsers(): Promise<User[]>;
}
