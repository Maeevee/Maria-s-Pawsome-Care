import { Container } from "@/common/components/Container/Container"

export const Hero = () => { 
    return(
        <div className="h-screen relative z-[-10]">
            <video autoPlay muted loop className="w-100 h-100 bg-slate-500">
                <source src="/video/bg.mp4" type="video/mp4"/>
            </video>
            <div className="absolute z-10 bottom-10">Maria'a Pawsome Care</div>
        </div>
    )
}