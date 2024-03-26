import { useState } from "react"
import { Sections } from "./components/Sections/Sections"
import {useSectionButtons} from "@/common/hooks/useSectionButtons"
import about from "@/common/data/about.json"
import { Container } from "@/common/components/Container/Container"

export const About = () => {

    const [point, setPoint] = useState("Why")
    const section = useSectionButtons(about, point)

    const handlePoint = (event: React.MouseEvent<HTMLButtonElement>) => {
        const{innerText} = event.currentTarget
        setPoint(innerText)
    } 

    return(
        <Container>
            <h2>Abut me</h2>
            <div>
                {section.map(({id, src, title, text}) => <Sections className="flex justify-between" classNameImg="object-contain h-auto max-w-full" key={id} src={src} title={title} text={text}/>)}
                <div className="flex justify-between mx-10">
                    <button onClick={handlePoint} type="button">Why</button>
                    <button onClick={handlePoint} type="button">What</button>
                    <button onClick={handlePoint} type="button">Who</button>
                    <button onClick={handlePoint} type="button">When</button>
                    <button onClick={handlePoint} type="button">How</button>
                </div>
            </div>
        </Container>
    )
}

//переобити логіку папок с хуками