
export class CreateUserController{
    constructor(dependencies){
        this.createUserUseCase = new dependencies.UseCase.CreateUser(dependencies);        
    }

    async createUser(req,res){
        try {
            const {name,email,password} = req.body
            const createdUser = await this.createUserUseCase.execute({name,email,password})
            res.status(200).json(createdUser)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }

    

}
