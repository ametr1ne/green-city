import {makeAutoObservable} from 'mobx'

export default class VolunteerStore {
    constructor() {
        this._volunteers = []
        makeAutoObservable(this)
    }

    setVolunteers(volunteers) {
        this._volunteers = volunteers
    }

    get volunteers() {
        return this._volunteers
    }
}