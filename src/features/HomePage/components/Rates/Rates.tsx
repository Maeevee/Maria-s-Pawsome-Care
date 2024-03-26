import { useRatesInfo } from "@/common/hooks/useRatesInfo"
import Image from "next/image"

export const Rates = () => {

    const rates = useRatesInfo()
    return(
        <ul className="flex justify-center">
            {rates.map(({id, img, title, text}) => <li className="relative w-[450px] h-[400px] overflow-hidden" key={id}>
                <Image src={img} width={450} height={400} alt=""/>
                <h3 className="absolute left-0 top-0">{title}</h3>
                <p className="absolute left-0 bottom-[-30]">{text}</p>
            </li>)}
        </ul>
    )
}