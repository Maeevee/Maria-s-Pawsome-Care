"use client"
import { useState } from "react"
import { ClientInfo } from "./components/ClientInfo/ClientInfo"
import moment from "moment"
import { CalendarMonitor } from "./components/ClientInfo/CalendarMonitor/CalendarMonitor"
import { CalendarGrid } from "./components/ClientInfo/CalendarGrid/CalendarGrid"

export const CalendarPage = () => {

    moment.updateLocale('en', {week:{dow:1}}) 
    const [today, setToday] = useState(moment())
    const startDay = today.clone().startOf('month').startOf('week')

    const prevHandler = () => {
        setToday(prev=>prev.clone().subtract(1,'month'))
        
    }

    const nextHandler = () => {
        setToday(prev=>prev.clone().add(1,'month'))
    }

    const todayHandler = () => {
        setToday(moment())
    }

    return(
        <>
        <p>calendar</p>
        {/* <ClientInfo/> */}

        <CalendarMonitor prevHandler={prevHandler} nextHandler={nextHandler} todayHandler={todayHandler} today={today}/>
        <CalendarGrid startDay={startDay} today={today}/>

        </>
    )
}