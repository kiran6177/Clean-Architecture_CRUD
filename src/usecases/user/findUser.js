export class FindUser{
    constructor(dependencies){
        this.userRepository =  new dependencies.Repositories.MongoUserRepository()
    }
    async execute(email){
        return this.userRepository.findUser(email)
    }
}