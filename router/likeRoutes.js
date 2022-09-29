const express = require('express')
const router = express.Router()

const {
    add, one, delet, getAllUser
} = require('../controller/likeController')



router.post('/add', add)
router.get("/all", getAllUser)
router.get('/:id', one)
router.delete('/:id', delet)








module.exports = router
