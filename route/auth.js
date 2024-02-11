import express from 'express'

const Router=express.Router()
import {createUser} from '../app/http/controller/auth.js'

Router.route('/signup').post(createUser)
//user creatiion
//signin
//google auth


export default Router