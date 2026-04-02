import { apiClient } from "@data/api/apiClient";
import { User } from "@domain/entities/User";
import { UserRepository } from "@domain/repositories/UserRepository";

export class UserRepositoryImpl implements UserRepository {
  async getUsers(): Promise<User[]> {
    const response = await apiClient.get<User[]>("/users");
    return response.data;
  }
}
