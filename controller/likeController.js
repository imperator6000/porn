const Like = require('../models/like')

exports.add = async (req, res, next) => {
    try {
        const like = new Like({
            likes: req.body.likes
        })
        like.save()
        res.status(201).json(
            {
                message: "success created",
                data: like
            }
        )
    } catch (err) {
        res.status(500).json(
            {
                message: "error"
            }
        )
    }
}

exports.one = async (req, res, next) => {
    try {
        const getId = await Like.findById({ _id: req.params.id })
        res.status(200).json(
            {
                message: "success",
                data: getId
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "like not found"
            }
        )
    }
}

exports.getAllUser = async(req, res)=>{
    try {
        const getAllLike = await Like.find({})
        .sort({date: -1})
        .populate("likes")
        res.status(200).json(
            {
                message: "success",
                 data: getAllLike
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "like not found"
            }
        )
    }
}






exports.delet = async (req, res, next) => {
    try {
        await Like.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json(
            {
                message: "success",
                data: []
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "like not found"
            }
        )
    }
}

