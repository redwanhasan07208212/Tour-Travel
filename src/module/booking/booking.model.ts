import { model, Schema } from 'mongoose'
import { Tbooking } from './booking.interface'

const bookingSchema = new Schema<Tbooking>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    tour: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    bookingSlots: {
      type: Number,
      required: true,
    },
    bookingStatus: {
      type: String,
      enum: ['pending', 'paid', ' cancelled'],
      default: 'pending',
    },
    totalPrice: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
)

export const Booking = model<Tbooking>('Booking', bookingSchema)
