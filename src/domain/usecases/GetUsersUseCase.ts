import { User } from "@domain/entities/User";
import { UserRepository } from "@domain/repositories/UserRepository";

export class GetUsersUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<User[]> {
    // 여기서 정렬, 필터링 등 비즈니스 로직을 처리할 수 있음
    const users = await this.userRepository.getUsers();
    return users.sort((a, b) => a.name.localeCompare(b.name)); // 예시: 이름 기준으로 정렬
  }
}
