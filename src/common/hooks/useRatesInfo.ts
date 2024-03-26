
import rates from "@/common/data/rates.json"

interface IRates{id:number, img: string, title: string, text: string}

export const useRatesInfo = ():IRates[] => rates