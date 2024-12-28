import express from 'express'
import { tourController } from './tour.controller'

const router = express.Router()

router.get('/schedule/:id', tourController.getNextSchedule)
router.get('/:id', tourController.getSingleTour)
router.get('/', tourController.getTours)
router.post('/create-tour', tourController.createTour)
router.put('/:id', tourController.updateTour)
router.delete('/:id', tourController.deleteTour)

export const tourRouter = router
