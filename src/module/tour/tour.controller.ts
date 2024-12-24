import { Request, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { tourService } from './tour.service'

const createTour = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await tourService.createTour(body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is created Successfully',
    data: result,
  })
})

const getTours = catchAsync(async (req: Request, res: Response) => {
  const result = await tourService.getTours()
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is created Successfully',
    data: result,
  })
})

const getSingleTour = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await tourService.getSingleTour(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is created Successfully',
    data: result,
  })
})

const updateTour = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const body = req.body
  const result = await tourService.updateTour(id, body)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is created Successfully',
    data: result,
  })
})
const deleteTour = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await tourService.deleteTour(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is created Successfully',
    data: result,
  })
})
const getNextSchedule = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await tourService.getNextSchedule(id)
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'User is created Successfully',
    data: result,
  })
})

export const tourController = {
  createTour,
  getTours,
  getSingleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
}
