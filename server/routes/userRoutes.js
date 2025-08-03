import express from 'express'
import {registerUser, loginUser, useCredits} from '../controllers/userController.js'
import userAuth from '../middleware/auth.js'

const userRouter = express.Router()
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/credits',userAuth,useCredits)
// routes/userRoutes.js
userRouter.use((req, res) => {
  console.log('Route reached:', req.method, req.originalUrl)
  res.status(404).json({ message: 'Route exists but not matched', path: req.originalUrl })
})


export default userRouter

//http://localhost:4000/api/user/register
//http://localhost:4000/api/user/login
