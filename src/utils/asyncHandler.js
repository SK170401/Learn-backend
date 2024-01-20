// Higher order function which accepts a function as a parameter and returns a promise that is resolved when the function completes successfully

//  Wrapper function using promise

const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => next(error))
}

export { asyncHandler }


//  Wrapper function using try/catch

// const asyncHandler = (fnc) => async (req, res, next) => {
//     try {
//         await fnc(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }