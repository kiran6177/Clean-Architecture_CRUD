export class FindAllUsersController{
    constructor(dependencies){
        this.findAllUsersUseCase = new dependencies.UseCase.FindAllUsers(dependencies);
    }

    async findAllUsers(req,res){
        try {
            const users = await this.findAllUsersUseCase.execute()
            res.status(200).json(users)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }
}