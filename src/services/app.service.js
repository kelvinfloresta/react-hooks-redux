import Axios from "axios"

export async function getMe() {
    const { data } = await Axios.get('http://www.mocky.io/v2/5de739113700000f00092714')
    return data
}