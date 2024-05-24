export class DeleteUserController{
    constructor(dependencies){
        this.deleteUserUseCase = new dependencies.UseCase.DeleteUser(dependencies)
    }

    async deleteUser(req,res){
        try {
            const { id } = req.query;
            const deleted = await this.deleteUserUseCase.execute(id);
            res.status(200).json(deleted)
        } catch (error) {
            res.status(400).json({error:error.message})
        }
    }
}