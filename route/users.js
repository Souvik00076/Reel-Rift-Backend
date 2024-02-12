import express from 'express'
import { authenticate } from '../app/http/middleware/auth.js'

import {getUser,updateUser,deleteUser,subscribeUser,unsubscribeUser,likeUser,dislikeUser} from '../app/http/controller/users.js'
const Router=express.Router()
/*
    Routes : 
        update user
        delete user
        get a user
        subscribe a user
        unsubscribe a user
        like a video
        dislike a video
*/
Router.route('/update/:id').put(authenticate,updateUser)
Router.route('/delete/:id').delete(authenticate,deleteUser)
Router.route('/user/:id').get(getUser)
Router.route('/subscribe/:id').put(authenticate,subscribeUser)
Router.route('/unsubscribe/:id').put(authenticate,unsubscribeUser)
Router.route('/like/:videoId').put(authenticate,likeUser)
Router.route('/dislike/:videoId').put(authenticate,dislikeUser)

export default Router