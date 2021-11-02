import { getRequests } from "./dataAccess.js"
import { deleteRequest } from "./dataAccess.js"

getRequests()

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})


export const Requests = () => {
    const requests = getRequests()
    const convertRequestToListElement = (potato) => {
            return `
                <li>
                    ${potato.description}
                    <button class="request__delete"
                            id="request--${potato.id}">
                        Delete
                    </button>
                </li>
            `
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