import express, { Request, Response } from 'express'
import globalErrorHandler from './middlewares/globarlError'
import notFound from './middlewares/notFound'
import userRouter from './module/User/user.router'
import tourRouter from './module/tour/tour.route'

const app = express()

// middleware
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/tour', tourRouter)

// POST: /api/user/create-user

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  })
})

app.use(globalErrorHandler)
app.use(notFound)

export default app
