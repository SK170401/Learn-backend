import { Router } from "express";
import { registerUser } from "../controller/user.controller.js";
import { Upload } from '../middlewares/multer.middleware.js'
const router = Router();

router.route('/register').post(
    Upload.fields([
        {
            name: 'avatar',
            maxCount: 1
        },
        {
            name: 'coverImage',
            maxCount: 1
        }
    ]),
    registerUser
)
// router.route('/login').post(loginUser)

export default router;