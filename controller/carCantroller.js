const Mowina = require('../models/carInfo')


exports.add = async (req, res, next) => {
    const rasmla = req.files
    let photos = []
    rasmla.forEach(photo => photos.push(`http://185.196.214.145:5000/${photo.path.slice(7)}`))
    try {
        const car = new Mowina({
            ...req.body,
            photo: photos
        })
        car.save()
        res.status(201).json(
            {
                message: "success created",
                data: car
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
        const getId = await Mowina.findById({ _id: req.params.id })
        res.status(200).json(
            {
                message: "success",
                data: getId
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "car not found"
            }
        )
    }
}

exports.getAllUser = async(req, res)=>{
    try {
        const getAllmowina = await Mowina.find({})
        .populate("userId")
        .populate("adminId")
        .sort({date: -1})
        res.status(200).json(
            {
                message: "success",
                 data: getAllmowina
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "car not found"
            }
        )
    }
}


exports.renew = async (req, res, next) => {
    try {
        const rasmla = req.files
        let photos = []
        rasmla.forEach(photo =>
            photos.push(`http://185.196.214.145:5000/${photo.path.slice(7)}`)
        )
        const updateMowina = await Mowina.findByIdAndUpdate(req.params.id, {
            ...req.body,
            photo: photos,
        })
        res.status(200).json(
            {
                message: "success",
                data: updateMowina
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "car not found"
            }
        )
    }
}

exports.pending = async(req, res)=>{
    const user = await Mowina.findByIdAndUpdate(req.params.id, {$set: {status: true} })
    res.json(user)
}


exports.delet = async (req, res, next) => {
    try {
        const deleteOne = await Mowina.findByIdAndDelete({ _id: req.params.id })
        res.status(200).json(
            {
                message: "success",
                data: []
            }
        )
    } catch (err) {
        res.status(404).json(
            {
                message: "car not found"
            }
        )
    }
}

// main pagedagi filter
exports.filterMain = async (req, res)=>{
    let yili, yurgani, narxi, madel;
    if (!!req.query.from || !!req.query.to) {
        yili = { from: req.query.from, to: req.query.to};
    }
    else {
        yili = req.query.yili;
    }
    if(!!req.query.from || !!req.query.to){
        yurgani = { from: req.query.from, to: req.query.to };
    }
    else {
        yurgani = req.query.yurgani;
    }
    if(!!req.query.from || !!req.query.to){
        narxi = { from: req.query.from, to: req.query.to };
    }
    else {
        narxi = req.query.narxi;
    }
    if(!!req.query.from){
        madel = { name: req.query.name };
    }
    else {
        madel = req.query.madel;
    }

    let options = {
        $gte: yili
    }
    let options1 = {
        $gte: yurgani,
    }
    let options2 = {
        $gte: narxi,
    }
    let options3 = {
        $regex: madel,
    }
    let foutcomes = await Mowina.find({
        yili: options,
        yurgani: options1,
        narxi: options2,
        madel: options3,
    })
    res.json(foutcomes)
}



// Avtomobil pagedagi filter
exports.agregat = async (req, res)=>{
    let yili, yurgani, narxi, madel, color, yoqilgi, transmission;
    if (!!req.query.from || !!req.query.to) {
        yili = { from: req.query.from, to: req.query.to};
    }
    else {
        yili = req.query.yili;
    }
    if(!!req.query.from || !!req.query.to){
        yurgani = { from: req.query.from, to: req.query.to };
    }
    else {
        yurgani = req.query.yurgani;
    }
    if(!!req.query.from || !!req.query.to){
        narxi = { from: req.query.from, to: req.query.to };
    }
    else {
        narxi = req.query.narxi;
    }
    if(!!req.query.from){
        madel = { name: req.query.name };
    }
    else {
        madel = req.query.madel;
    }
    if(!!req.query.from){
        color = { name: req.query.name };
    }
    else {
        color = req.query.color;
    }
    if(!!req.query.from){
        yoqilgi = { name: req.query.name };
    }
    else {
        yoqilgi = req.query.yoqilgi;
    }
    if(!!req.query.from){
        transmission = { name: req.query.name };
    }
    else {
        transmission = req.query.transmission;
    }

    let options = {
        $gte: yili
    }
    let options1 = {
        $gte: yurgani,
    }
    let options2 = {
        $gte: narxi,
    }
    let options3 = {
        $regex: madel,
    }
    let options4 = {
        $regex: color,
    }
    let options5 = {
        $regex: yoqilgi,
    }
    let options6 = {
        $regex: transmission,
    }
    let foutcomes = await Mowina.find({
        yili: options,
        yurgani: options1,
        narxi: options2,
        madel: options3,
        // color: options4,
        // yoqilgi: options5,
        // transmission: options6
    })
    res.json(foutcomes)
}
