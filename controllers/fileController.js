const {FILTER_TYPES} = require("../constants/constant");
const db = require("../models");
exports.uploadFile = async (req, res)=>{

    try{
        console.log(req.file);
        if(!req.file) {
            return res.status(400).json({
                status: false,
                message: "File Is Required."
            })
        }
        const {filter} = req.body;
        const {originalname, filename} = req.file;

        const isFilterValid = Object.values(FILTER_TYPES).includes(filter);
        if(!isFilterValid){
            return res.status(400).json({
                status: false,
                message: "Invalid Filter Type."
            })
        }

        const imageUrl = `${req.protocol}://${req.get('host')}/upload/${filename}`;
        const createFile = await db.UI_File.create({
            url: imageUrl,
            filename: originalname,
            filter: filter
        })
        return res.status(200).json({
            status: true,
            message: "Successfully File Upload.",
            data: createFile
        })
    }catch (e) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        })
    }
}

exports.fileList = async (req, res)=>{

    try{
        const files = await db.UI_File.findAll()
        return res.status(200).json({
            status: true,
            message: "Successfully Fetch File.",
            data: files
        })
    }catch (e) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        })
    }
}