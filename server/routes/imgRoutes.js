import express from 'express'
import { imageGenerator } from '../controllers/imageController.js'
import userAuth from '../middleware/auth.js'

const imageRouter = express.Router()

imageRouter.post('/generate-image',userAuth,imageGenerator)

export default imageRouter

