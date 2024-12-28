import { Router } from 'express'
import { tourRouter } from '../module/tour/tour.route'
import { userRouter } from '../module/User/user.router'

const router = Router()

const tourTravelRoute = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/tour',
    route: tourRouter,
  },
]

tourTravelRoute.forEach((route) => router.use(route.path, route.route))
export default router
