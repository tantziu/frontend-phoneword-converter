const baseUrl = 'http://localhost:4000/api/v1/phoneword'

export const fetchAllWords = async (id:string) => {
    let response:Response
    try {
        response = await fetch(baseUrl + `/id/${id}`)
        const body = await response.json()
        return body
    } catch(error) {
        throw new Error(error)
    }
}

export const fetchRealWords = async (id:string) => {
    let response:Response
    try {
        response = await fetch(baseUrl + `/id/${id}/filter`)
        const body = await response.json()
        return body
    } catch(error) {
        throw new Error(error)
    }
}
