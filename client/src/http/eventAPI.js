import { $host, $authHost } from "./index";

export const createEvent = async (event) => {
    const {data} = await $authHost.post('api/event', event)
    return data
}

export const fetchEvents = async () => {
    const {data} = await $host.get('api/event')
    return data
}

export const fetchOneEvent = async (id) => {
    const {data} = await $host.get('api/event/' + id)
    return data
}
