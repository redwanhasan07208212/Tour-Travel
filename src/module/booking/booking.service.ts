import Tour from '../tour/tour.model'
import { Tbooking } from './booking.interface'
import { Booking } from './booking.model'

const createBooking = async (payload: Tbooking): Promise<Tbooking> => {
  const { tour, bookingSlots } = payload
  const requiredTour = await Tour.findById(tour)
  if (!requiredTour) {
    throw new Error('Tour is not Found')
  }
  const totalPrice = requiredTour.price * bookingSlots
  payload.totalPrice = totalPrice
  payload.bookingStatus = 'pending'

  if (requiredTour.avaiableSeats < bookingSlots) {
    throw new Error('Not Enough Seats Available')
  }

  const booking = await Booking.create(payload)

  const updatedTour = await Tour.findByIdAndUpdate(tour, {
    $inc: { avaiableSeats: -bookingSlots },
  })
  if (!updatedTour) {
    throw new Error('Tour is not Updated')
  }
  return booking
}

export const bookingService = {
  createBooking,
}
