export class FindUserController{
    constructor(dependencies){
        this.findUserUseCase = new dependencies.UseCase.FindUser(dependencies)
    }

    async findUser(req,res){
        try {
            const {email} = req.body;
            const userFind = await this.findUserUseCase.execute(email);
            res.status(200).json(userFind)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }
}