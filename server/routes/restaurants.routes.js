const express = require('express')
const router = express.Router()

const Restaurant = require('../models/restaurant.model')

// Endpoints

router.get('/getRests', (req, res) => {

    Restaurant.find()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.get('/getOneRest/:rest_id', (req, res) => {

    const id = req.params.rest_id

    Restaurant.findById(id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.post('/newRest', (req, res) => {

    Restaurant.create(req.body)
        .then(response => res.json(response))
        .catch(error => console.log(error))
})

router.put('/editRest/:rest_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.rest_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Restaurant.findByIdAndUpdate(req.params.rest_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/:rest_id/delete', (req, res) => {

    const id = req.params.rest_id

    Restaurant.findByIdAndDelete(id) 
        .then(response => res.jason(response))
        .catch(error => res.status(500).json(error))

})
module.exports = router
