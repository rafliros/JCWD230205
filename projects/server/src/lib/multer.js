// Import Multer
const multer = require('multer')
// Import File System
const fs = require('fs')

// 1. Setup Disk Storaged & Filename
let defaultPath= 'Public'
var storage = multer.diskStorage({
    destination: async(req, file, cb) => {
        console.log(file)

        // Check Directory (Exist or Not)
        let isDirectoryExist = fs.existsSync(`${defaultPath}/${file.fieldname}`)

        if (!isDirectoryExist) {   
        await fs.promises.mkdir(`${defaultPath}/${file.fieldname}`, { recursive: true });
        }

        // To Create 'Public/pdf' or 'Public/images'
        if (file.fieldname === 'pdf') { 
            cb(null, `${defaultPath}/${file.fieldname}`)
        }
        if (file.fieldname === 'images') { 
            cb(null, `${defaultPath}/${file.fieldname}`)
        }
    },
    filename: (req, file, cb) => {
        cb(null, 'PIMG' + '-' + Date.now() + Math.round(Math.random() * 100000000) + '.' + file.mimetype.split('/')[1]) // [image, png]
    }
})


// 2 Setup File Filter
var fileFilter = (req, file, cb) => {
    if(file.mimetype.split('/')[0] === 'image'){
        console.log(file)
        // Accept
        cb(null, true)
    }else if (file.mimetype.split('/')[0] !== 'image'){
        // Reject
        cb(new Error('File Must Be Image!'))
    }
}

// limits: {fileSize: 100000} --- for limiting file size
exports.multerUpload = multer({storage: storage, fileFilter: fileFilter })