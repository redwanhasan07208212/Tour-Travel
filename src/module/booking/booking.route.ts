import express from 'express'
import { bookingController } from './booking.controller'
// create Booking
// get All Booking
// get Booking by id
// get Booking by userId = my bookings
// update Booking
// delete Booking = soft delete

const router = express.Router()
router.post('/create-booking', bookingController.createBooking)
router.patch('/:id', bookingController.updateBooking)
export const bookingRouter = router
