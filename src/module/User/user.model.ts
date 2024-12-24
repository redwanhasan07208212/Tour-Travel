import { model, Schema } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: 3,
    maxlength: 50,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 65,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
      },
      message: 'Please enter a valid email address',
    },
    immutable: true,
  },
  photo: String,
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user'],
    default: 'user',
    lowercase: true,
  },
  userStatus: {
    type: String,
    required: true,
    enum: ['active', 'inactive'],
    default: 'active',
    lowercase: true,
  },
})
// hook -> pre
// userSchema.pre('find', function (this, next) {
//   this.find({ userStatus: { $eq: 'active' } })
//   next()
// })

// userSchema.post('find', function (docs, next) {
//   docs.forEach((doc: IUser) => {
//     doc.name = doc.name.toUpperCase()
//   })
//   next()
// })

const User = model('User', userSchema)
export default User
