export function serialize(obj: any) {
    let queryString = ''
    for (const key in obj) {
        queryString += `&${key}=${obj[key]}`
    }

    return queryString
}