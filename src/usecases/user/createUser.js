import { User } from "../../entities/user/user.js"

export class CreateUser{
    constructor(dependencies){
        this.userRepository = new dependencies.Repositories.MongoUserRepository()
    }
    async execute(userr){
        const user = new User(userr)
        return this.userRepository.createUser(user)
    }
}