import axios from "axios"
import { useEffect } from "react"
const key = 'OS8SOOrO0XQAqukXPGkNvNKcWGNz3UL2'

export const LogVisit = () => {
    useEffect(() => {
        logVisit()
    }, []) 

    const logVisit = async() => {
        try{
            const response = await axios.get('https://api.ipify.org/?format=json')
            const ip = response.data.ip
            const location = await axios.get(`http://api.ipstack.com/${ip}?access_key=${key}`)
            const visitData = {
                timesStamp: Date.now(),
                ipAddress: ip,
                position: {... location.data}
            }
            console.log(visitData);
            
        } catch(error:any){
            console.log(error.message);
        }
    }

    return(
        <>
        
        </>
    )
}