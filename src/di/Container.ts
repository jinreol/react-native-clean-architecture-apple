import { GetUsersUseCase } from "@domain/usecases/GetUsersUseCase";
import { UserRepositoryImpl } from "@data/repositories/UserRepositoryImpl";
import { get } from "node_modules/axios/index.cjs";

// 1. Repository 구현체 생성
const userRepository = new UserRepositoryImpl();

// 2. UseCase 생성 및 Repository 주입 (DI)
const getUsersUseCase = new GetUsersUseCase(userRepository);

// 3. 외부(Hooks)로 노출할 의존성들
export const container = {
  getUsersUseCase,
};

export type Container = typeof container;
