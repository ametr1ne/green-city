import { $host, $authHost } from "./index";

export const createOrganization = async (organization) => {
    const {data} = await $authHost.post('api/organization', organization)
    return data
}

export const fetchOrganizations = async () => {
    const {data} = await $host.get('api/organization')
    return data
}

export const fetchOneOrganization = async (id) => {
    const {data} = await $host.get('api/organization/' + id)
    return data
}



export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data
}

export const fetchOneCategories = async (id) => {
    const {data} = await $host.get('api/category/' + id)
    return data
}



export const createProblem = async (problem) => {
    const {data} = await $authHost.post('api/problem', problem)
    return data
}

export const fetchProblems = async () => {
    const {data} = await $host.get('api/problem')
    return data
}

export const fetchOneProblems = async (id) => {
    const {data} = await $host.get('api/problem/' + id)
    return data
}

export const updateProblem = async (id, problem) => {
    const {data} = await $authHost.patch('api/problem/' + id, problem)
    return data
}



export const createStage = async (stage) => {
    const {data} = await $authHost.post('api/stage', stage)
    return data
}

export const fetchStages = async () => {
    const {data} = await $host.get('api/stage')
    return data
}

export const fetchOneStage = async (id) => {
    const {data} = await $host.get('api/stage/' + id)
    return data
}