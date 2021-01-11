import axios from 'axios'

export default class RatingService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getComments = () => this.api.get('/getComments')
    getRestaurantComments = id => this.api.get(`/getRestaurantComments/${id}`)
    newComment = comment => this.api.post('newComment', comment)
    editComment = (id, comment) => this.api.put(`/editComment/${id}`, comment)
    deleteComment = (id) => this.api.get(`/${id}/delete`)

}