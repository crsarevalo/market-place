import express from 'express'
import {
  createNewUser,
  getUserData,
  googleLogin,
  loginUser,
  updateUserProfile,
} from '../../src/api/v1/Controllers/userControllers.js'
import { validateParametersUser } from '../../middlewares/validateParamsUser.js'
import { validparameters } from '../../middlewares/validateParametersLogin.js'

const router = express.Router()

router.get('/user/:id', getUserData)
router.post('/register', validateParametersUser, createNewUser)
router.post('/login', validparameters, loginUser)
router.post('/googleLogin', googleLogin)
router.put('/user/:id', updateUserProfile)

export default router
