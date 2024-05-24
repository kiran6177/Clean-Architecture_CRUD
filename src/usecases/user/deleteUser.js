export class DeleteUser{
    constructor(dependencies){
        this.userRepository = new dependencies.Repositories.MongoUserRepository()
    }
    async execute(id){
        return this.userRepository.deleteUser(id)
    }
}