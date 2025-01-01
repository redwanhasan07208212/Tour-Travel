import mongoose from 'mongoose'
import Tour from '../tour/tour.model'
import { Tbooking } from './booking.interface'
import { Booking } from './booking.model'

const createBooking = async (payload: Tbooking): Promise<Tbooking> => {
  // 1. clone database = akane database ar akta clone banay
  // 2. sandBox - test database =  isolated environment , akta test playground jekane database
  // nie kaj krte pare
  // tarmane arokom akta obosta jekane gie ami atake test korate parbo je akne jinish ta
  // thik ache naki
  // 3. database-error , database a kno error thakle(error in the database )
  // 4. database - delete
  // 5. database - merge

  // create a session
  const session = await mongoose.startSession()

  session.startTransaction()

  try {
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

    const booking = await Booking.create([payload], { session }) // object take array die wrap kore setake mongoose ar kache patiye dicci

    const updatedTour = await Tour.findByIdAndUpdate(booking[0].tour, {
      $inc: { avaiableSeats: -bookingSlots },
    })
    if (!updatedTour) {
      throw new Error('Tour is not Updated')
    }
    await session.commitTransaction()
    await session.endSession()
    return booking[0]
  } catch (err) {
    await session.abortTransaction()
    await session.endSession()
    throw err
  }
}

const updateBooking = async (id: string, payload: Partial<Tbooking>) => {
  const bookingTour = await Booking.findById(id)
  console.log(bookingTour)
  const requiredTour = await Tour.findById(bookingTour?.tour)
  console.log(requiredTour)
  if (!requiredTour) {
    throw new Error('Tour is not Found')
  }
  const result = Booking.findByIdAndUpdate(id, payload, { new: true })
  if (bookingTour?.bookingStatus == 'cancelled') {
    bookingTour.totalPrice = 0
    if (bookingTour?.bookingSlots !== undefined) {
      const updatedTour = await Tour.findByIdAndUpdate(requiredTour, {
        $inc: { avaiableSeats: +bookingTour?.bookingSlots },
      })
      if (!updatedTour) {
        throw new Error('Tour is not Updated')
      }
    }
    bookingTour.bookingSlots = 0
  }
  return result
}

export const bookingService = {
  createBooking,
  updateBooking,
}
