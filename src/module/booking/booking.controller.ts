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
export const bookingController = {
  createBooking,
}
