export const formatDateTime = (dateTime) => {
    const date = dateTime.slice(0, 10).split('-').reverse().join('-')
    const time = dateTime.slice(11, 16)
    return `created at ${time} on ${date}`
}