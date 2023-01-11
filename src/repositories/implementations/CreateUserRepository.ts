import { UserEntitie } from "../../entities/User";
import { ICreateUserRepository } from "../ICreateUserRepository";
import { UserModel } from "../../model/User";

export class CreateUserRepository implements ICreateUserRepository{

    save(user: UserEntitie): UserEntitie {
        UserModel.create(user)
        return user
    }

}