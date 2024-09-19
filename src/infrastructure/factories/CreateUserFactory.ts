import { UserRepository } from "../../Application/use-cases/repositories/UserRepository";
import { CreateUser } from "../../Application/use-cases/CreateUser";
import { UserController } from "../web/controllers/UserController";
import { IUserRepository } from "../../Application/use-cases/repositories/IUserRepository";
import { IBcryptConfig } from "../utils/bcrypt/IBcryptConfig";
import { BcryptConfig } from "../utils/bcrypt/BcryptConfig";
import { IUuidConfig } from "../utils/uuid/IUuidConfig";
import { UuidConfig } from "../utils/uuid/UuidConfig";
import { IPrismaConfig } from "../database/IPrismaConfig";
import { PrismaConfig } from "../database/PrismaConfig";

export function makeCreateUserController(): UserController {
    const prismaConfig: IPrismaConfig = new PrismaConfig();

    const userRepository: IUserRepository = new UserRepository(prismaConfig);
    const bcryptConfig: IBcryptConfig = new BcryptConfig();
    const uuidConfig: IUuidConfig = new UuidConfig();


    const createUserUseCase = new CreateUser(userRepository, bcryptConfig, uuidConfig); // Use Case recebe a interface
    return new UserController(createUserUseCase); // Controller recebe o Use Case
}