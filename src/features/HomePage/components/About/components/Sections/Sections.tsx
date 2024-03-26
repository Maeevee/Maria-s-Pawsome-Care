import Image from "next/image"

interface IProps{src: string; title: string; text: string; className?: string; classNameImg?: string; classNameTextContainer?: string;}

export const Sections = ({ src, title, text, className = "", classNameImg = "", classNameTextContainer = "" }: IProps) => {

    return(
            <div className={className}>
                <Image className={classNameImg} src={src} alt={title} height={1} width={500}/>
                <div className={classNameTextContainer}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            </div>
    )
}