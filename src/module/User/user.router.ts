import express from 'express'
import { userController } from './user.controller'

const router = express.Router()

router.post('/create-user', userController.createUser)
router.get('/', userController.getUser)
router.get('/:userId', userController.SingleUser)
router.put('/:userId', userController.UpdateUser)
router.delete('/:userId', userController.DeleteUser)

export const userRouter = router;
