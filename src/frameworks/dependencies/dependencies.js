import { CreateUser,FindUser,UpdateUser,DeleteUser,FindAllUsers } from "../../usecases/index.js"
import { MongoUserRepository } from "../../adapters/repositories/index.js"


const UseCase = {
    CreateUser,
    FindUser,
    UpdateUser,
    DeleteUser,
    FindAllUsers
}

const Repositories = {
    MongoUserRepository
}

const dependencies =  {
    UseCase,
    Repositories
}

export default dependencies