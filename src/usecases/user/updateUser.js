export class UpdateUser{
    constructor(dependencies){
        this.userRepository = new dependencies.Repositories.MongoUserRepository();
    }

    async execute(id,user){
        return this.userRepository.updateUser(id,user)
    }
}