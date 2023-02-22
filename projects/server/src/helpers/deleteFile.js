// Import File System
const fs = require('fs')


// 1. Delete File
const deleteFiles = (files) => {


    files.images.forEach((value) => {
        fs.unlink(value.path, function(err){
        try {
                if(err) throw err
            } catch (error) {
                console.log(error)
            }
         })
    })
}

module.exports = deleteFiles