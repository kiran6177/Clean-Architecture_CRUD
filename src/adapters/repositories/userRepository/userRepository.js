import {userModel} from '../../database/index.js'
class UserRepository{
    async createUser(user){

    }
    async updateUser(user){

    }
    async deleteUser(user){

    }
    async findUser(user){}
    async findAllUsers(){}
}

export class MongoUserRepository extends UserRepository{
    constructor(){
        super()
    }
    async createUser(user){
        const userCreate = await userModel.create(user);
        return userCreate
    }
    async findUser(email){
        const userFind = await userModel.findOne({email})
        return userFind
    }
    async updateUser(id,user){
        const userUpdate = await userModel.findOneAndUpdate({_id:id},{$set:user},{new:true})
        return userUpdate
    }
    async deleteUser(id){
        const userDelete = await userModel.findByIdAndDelete({_id:id});
        return userDelete
    }
    async findAllUsers(){
        return await userModel.find()
    }
}