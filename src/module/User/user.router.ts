import { Router } from 'express'
import { userController } from './user.controller'

const userRouter = Router()

userRouter.post('/create-user', userController.createUser)
userRouter.get('/', userController.getUser)
userRouter.get('/:userId', userController.SingleUser)
userRouter.put('/:userId', userController.UpdateUser)
userRouter.delete('/:userId', userController.DeleteUser)

export default userRouter
