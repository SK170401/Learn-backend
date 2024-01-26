import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/Cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';


const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'mail found successfully'
    });

    // get user details from frontend
    // validate - if not empty
    // check if user is already registered - using email / username
    // check for image upload - avatar
    // upload image to cloudinary server
    // create user object - create entry in database
    // remove password and refreshToken field from user object response
    // check if user is created successfully
    // return response

    const { username, fullName, email, password } = req.body
    console.log(email)

    if ([username, fullName, email, password].some((filed) => filed?.trim() === '')) { throw new ApiError(400, 'All fields are required.') }


    const userExist = User.findOne({
        $or: [{ username }, { email }]
    })

    if (userExist) {
        throw new ApiError(409, 'User with same username or email already exists.')
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if (!avatarLocalPath) {
        throw new ApiError(400, 'Avatar is required.')
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(avatarLocalPath)

    if (!avatar) {
        throw new ApiError(400, 'Avatar upload failed')
    }

    const user = await User.create({
        fullName,
        avatar: avatar.url,
        coverImage: coverImage?.url || '',
        email,
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        '-password -refreshToken'
    )

    if (!createdUser) {
        throw new ApiError(500, 'Error while registering the user.')
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, 'User registered successfully')
    )

    const loginUser = asyncHandler(async (req, res) => {
        // req.body -> data
        // get username or email
        // find the user
        // check if password is correct
        // create a accesstoken and refresh token
        // send token in secured cookie
        // - - - - - - - - - - - -
    })

})

export { registerUser }