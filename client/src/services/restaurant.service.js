import axios from 'axios'

export default class RestaurantService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials: true
        })
    }

    getRests = () => this.api.get('/getRests')
    getOneRest = id => this.api.get(`/getOneRest/${id}`)
    newRest = restaurant => this.api.post('newRest', restaurant)
    editRest = (id, restaurant) => this.api.put(`/editRest/${id}`, restaurant)
    deleteRest = (id) => this.api.get(`/${id}/delete`)

}