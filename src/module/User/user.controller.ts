//req and response
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { userService } from './user.service'

const createUser = catchAsync(async (req, res, next) => {
  const payLoad = req.body
  const result = await userService.createUser(payLoad)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created Successfully',
    data: result,
  })
})
const getUser = catchAsync(async (req, res, next) => {
  const result = await userService.getUser()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User get Successfully',
    data: result,
  })
})
const SingleUser = catchAsync(async (req, res, next) => {
  const userId = req.params.userId
  const result = await userService.singleUser(userId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Single User get Successfully',
    data: result,
  })
})

const UpdateUser = catchAsync(async (req, res, next) => {
  const userId = req.params.userId
  const data = req.body
  const result = await userService.updateUser(userId, data)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is updated successfully',
    data: result,
  })
})

const DeleteUser = catchAsync(async (req, res, next) => {
  const userId = req.params.userId
  const result = await userService.deleteUser(userId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is Deleted Successfully',
    data: result,
  })
})

export const userController = {
  createUser,
  getUser,
  SingleUser,
  UpdateUser,
  DeleteUser,
}
