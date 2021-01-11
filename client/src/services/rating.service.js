import axios from 'axios'

export default class RatingService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getRatings = () => this.api.get('/getRatings')
    getRestaurantRatings = id => this.api.get(`/getRestaurantRatings/${id}`)
    newRating = rating => this.api.post('newRating', rating)
    editRating = (id, rating) => this.api.put(`/editRating/${id}`, rating)
    deleteRating = (id) => this.api.get(`/${id}/delete`)

}