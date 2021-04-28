const express = require('express')
const router = express.Router()

const Rating = require('../models/rating.model')

//Endpoints

router.get('/getRatings', (req, res) => {

    Rating.find()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.get('/getRestaurantRatings/:restaurant_id', (req, res) => {

    const id = req.params.restaurant_id

    Rating.find({ restaurant: { _id: id }})
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.post('/newRating', (req, res) => {

    Rating.create(req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.put('/editRating/:rating_id', (req, res) => {

    if (!mongoose.Types.ObjectId.isValid(req.params.rating_id)) {
        res.status(400).json({ message: 'Specified id is not valid' })
        return
    }

    Rating.findByIdAndUpdate(req.params.rating_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/:rating_id/delete', (req, res) => {

    const id = req.params.rating_id

    Rating.findByIdAndDelete(id) 
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))

})

module.exports = router