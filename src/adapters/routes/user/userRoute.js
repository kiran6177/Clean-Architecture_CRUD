import express from 'express'
import dependencies from '../../../frameworks/dependencies/dependencies.js'
import { CreateUserController,FindUserController,UpdateUserController, DeleteUserController,FindAllUsersController } from '../../controllers/index.js';
const router = express.Router();

const Controllers = {
    createUserController : new CreateUserController(dependencies),
    findUserController : new FindUserController(dependencies),
    updateUserController : new UpdateUserController(dependencies),
    deleteUserController : new DeleteUserController(dependencies),
    findAllUsersController : new FindAllUsersController(dependencies)
}

router.post('/',)
router.post('/login',(req,res)=>Controllers.findUserController.findUser(req,res))
router.post('/signup',(req,res)=>Controllers.createUserController.createUser(req,res))
router.post('/update',(req,res)=>Controllers.updateUserController.updateUser(req,res))
router.get('/delete',(req,res)=>Controllers.deleteUserController.deleteUser(req,res))
router.get('/findall',(req,res)=>Controllers.findAllUsersController.findAllUsers(req,res))


export default router