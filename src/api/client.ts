const baseUrl = 'http://localhost:4000/api/v1/phoneword'

export const fetchWords = async (id:string) => {
    let response:Response
    try {
        response = await fetch(baseUrl + `/id/${id}`)
        // console.log("response", response)
        const body = await response.json()
        // console.log("body", body)
        return body
    } catch(error) {
        throw new Error(error)
    }
}
