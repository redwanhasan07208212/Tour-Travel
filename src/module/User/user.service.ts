import { IUser } from './user.interface'
import User from './user.model'

const createUser = async (payLoad: IUser): Promise<IUser> => {
  const result = await User.create(payLoad)
  return result
}
const getUser = async () => {
  const result = await User.find()
  return result
}
const singleUser = async (id: string) => {
  const result = await User.findById(id)
  return result
}
const updateUser = async (id: string, Data: IUser) => {
  const result = await User.findByIdAndUpdate(id, Data, { new: true })
  return result
}
const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id)
  return result
}
export const userService = {
  createUser,
  getUser,
  singleUser,
  updateUser,
  deleteUser,
}
