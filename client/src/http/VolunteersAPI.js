import { $host, $authHost } from "./index";

export const createVolunteer = async (volunteer) => {
    const {data} = await $authHost.post('api/volunteer', volunteer)
    return data
}

export const fetchVolunteers = async () => {
    const {data} = await $host.get('api/volunteer')
    return data
}

export const fetchOneVolunteer = async (id) => {
    const {data} = await $host.get('api/volunteer/' + id)
    return data
}
