import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { bookingService } from './booking.service'

const createBooking = catchAsync(async (req, res, next) => {
  const body = req.body
  const result = await bookingService.createBooking(body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Booking created Successfully',
    success: true,
    data: result,
  })
})
const updateBooking = catchAsync(async (req, res, next) => {
  const body = req.body
  const { id } = req.params
  console.log(id)
  const result = await bookingService.updateBooking(id, body)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    message: 'Booking created Successfully',
    success: true,
    data: result,
  })
})
export const bookingController = {
  createBooking,
  updateBooking,
}
