import { useState } from "react"

export const ClientInfo = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {

        const {name, value} = event.target
        switch (name) {
            case "name":
                setName(value)
                return
            case "phone":
                setPhone(value)
                return
            case "email":
                setEmail(value)
                return
            case "message":
                setMessage(value)
            default:
              return
          }    }
    
    return(
        <form className="flex flex-col w-1/3">
            <input className="bg-gray-500 mb-3"  name="name" value={name} onChange={handleChange}/>
            <input className="bg-gray-500 mb-3" name="phone" value={phone} onChange={handleChange}/>
            <input className="bg-gray-500 mb-3" name="email" value={email} onChange={handleChange}/>
            <textarea className="bg-gray-500" name="message" value={message} onChange={handleChange}/>
        </form>
    )
}