export class FindAllUsers {
    constructor(dependencies){
        this.userRepository = new dependencies.Repositories.MongoUserRepository()
    }

    async execute(){
        return this.userRepository.findAllUsers()
    }
}