import multer from 'multer';

const storage = multer.storage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

export const Upload = multer({ storage })
