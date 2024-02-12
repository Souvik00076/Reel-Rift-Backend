import express from 'express'

const Router=express.Router()
import {createUser,loginUser} from '../app/http/controller/auth.js'

Router.route('/signup').post(createUser)
Router.route('/signin').post(loginUser)
//user creatiion
//signin
//google auth


export default Router