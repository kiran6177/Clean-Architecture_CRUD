export class UpdateUserController{
    constructor(dependencies){
        this.findUserUseCase = new dependencies.UseCase.FindUser(dependencies);
        this.updateUserUseCase = new dependencies.UseCase.UpdateUser(dependencies);
    }

    async updateUser(req,res){
        try {
            const {name,email,password} = req.body
            const userFind = await this.findUserUseCase.execute(email);
            const id = userFind._id
            const update = await this.updateUserUseCase.execute(id,req.body)
            res.status(200).json(update);
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }
}