import about from "@/common/data/about.json"
import {IAbout} from "../inteface"

export const useAbout = (value: string):IAbout[] => {

    const section = about.filter(({title}) => title === value)
    return section 
}