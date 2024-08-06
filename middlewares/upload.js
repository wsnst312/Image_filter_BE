const multer = require('multer');
const path = require('path');
const fs = require('fs');

const UPLOAD_DIR = './uploads/';

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

const storage = multer.diskStorage({
    destination: UPLOAD_DIR,
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


function checkFile(file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb(new Error("Invalid fileType"), false);
    }
}

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        checkFile(file, cb);
    }
}).single('file');

const handleMulterErrors = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            return res
                .status(400)
                .json({ status: false, message: "File size cannot be larger than 5MB!" });
        }
    } else if (err) {
        if (err.message === "Invalid fileType") {
            return res.status(400).json({
                status: false,
                message:
                    "Invalid file type. Only JPG and PNG are allowed.",
            });
        } else {
            return res.status(400).json({
                apiStatus: false,
                message: "An unexpected error occurred",
            });
        }
    }
    next();
};

module.exports = {
    upload,
    handleMulterErrors
};