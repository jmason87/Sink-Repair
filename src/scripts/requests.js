import { getRequests } from "./dataAccess.js"

getRequests()


export const Requests = () => {
    const requests = getRequests()
    const convertRequestToListElement = (potato) => {
            return `<li>${potato.description}</li>`
    }

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}