import { Container } from "@/common/components/Container/Container"
import { useSectionButtons } from "@/common/hooks/useSectionButtons"
import { useState } from "react"
import service from "@/common/data/service.json"
import { Sections } from "../About/components/Sections/Sections"

export const Services = () => {
    
    const [point, setPoint] = useState("Mission")
    const section = useSectionButtons(service, point)

    const handlePoint = (event: React.MouseEvent<HTMLButtonElement>) => {
        const{innerText} = event.currentTarget
        setPoint(innerText)
    }

    return(
        <Container>
            <h2>What makes us different?</h2>
            <div className="flex">
            {section.map(({id, src, title, text}) => <Sections key={id} src={src} title={title} text={text}/>)}
            <div className="flex flex-col">
                <button onClick={handlePoint} type="button">Mission</button>
                <button onClick={handlePoint} type="button">World class team</button>
                <button onClick={handlePoint} type="button">Companion pets first</button>
                <button onClick={handlePoint} type="button">Hub for MENA</button>
                <button onClick={handlePoint} type="button">One stop shop</button>
            </div>
        </div>
        </Container>
    )
}