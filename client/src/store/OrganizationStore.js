import {makeAutoObservable} from 'mobx'

export default class OrganizationStore {
    constructor() {
        this._organizations = []
        this._categories_of_organizations = []
        this._problems = []
        this._stages = []
        makeAutoObservable(this)
    }

    setOrganizations(organizations) {
        this._organizations = organizations
    }

    setCategoriesOfOrganizations(categories) {
        this._categories_of_organizations = categories
    }

    setProblems(problems) {
        this._problems = problems
    }

    setStages(stages) {
        this._stages = stages
    }

    get organizations() {
        return this._organizations
    }

    get categories_of_organizations() {
        return this._categories_of_organizations
    }

    get problems() {
        return this._problems
    }

    get stages() {
        return this._stages
    }
}