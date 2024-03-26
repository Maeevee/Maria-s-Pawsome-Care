"use client"

import { LogVisit } from "@/common/components/LogVisit/LogVisit"
import { About } from "./components/About/About"
import { Area } from "./components/Area/Area"
import { Hero } from "./components/Hero/Hero"
import { Rates } from "./components/Rates/Rates"
import { Services } from "./components/Services/Services"

export const HomePage = () => {
    return(
        <div>
            <Hero/>
            <About/>
            <Area/>
            <Services/>
            <Rates/>
            <LogVisit/>
        </div>
    )
}