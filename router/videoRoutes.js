const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const {
    add, one, renew, delet, getAllUser
} = require('../controller/videoController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'sex/video')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    },
})

const upload = multer({ storage })

router.post('/add', upload.array('video', 20), add)
router.get("/all", getAllUser)
router.get('/:id', one)
router.put('/:id', upload.array('video', 20), renew)
router.delete('/:id', delet)








module.exports = router
