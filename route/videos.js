import express from 'express'
import {createVideo,
        updateVideo,
        deleteVideo,
        getVideo,
        viewVideo,
        randomVideo,
        trendingVideos,
        subscribedChannels} from '../app/http/controller/videos.js'
import {authenticate} from '../app/http/middleware/auth.js'
const Router=express.Router()


Router.route('/').post(authenticate,createVideo)
Router.route('/update/:id').put(authenticate,updateVideo)
Router.route('/delete/:id').delete(authenticate,deleteVideo)
Router.route('/find/:id').get(getVideo)
Router.route('/view/:id').put(viewVideo)
Router.route('/trend').get(trendingVideos)
Router.route('/random').get(randomVideo)
Router.route('/subscribe').get(authenticate,subscribedChannels)


export default Router