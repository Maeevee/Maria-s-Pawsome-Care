interface IArgs{id: number; src: string; title: string; text: string}

export const useSectionButtons = (arr:IArgs[], value:string) => {

    const section = arr.filter(({title}) => title === value)
    return section 
}