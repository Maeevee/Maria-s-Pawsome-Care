import moment from "moment"
import Link from "next/link"

interface IProps{today:moment.Moment, prevHandler:() => void, nextHandler: () => void, todayHandler: () => void, currentDay?:boolean}

export const CalendarMonitor = ({prevHandler, nextHandler, todayHandler, today, currentDay}: IProps) => {
    return(
        <div>
            <div>
                <div>
                    {currentDay&&<span>{today.format('D')}</span>}
                    <span>{today.format('MMMM')}</span>
                    <span>{today.format('YYYY')}</span>
                </div>
                <div>
                    <button type='button' onClick={prevHandler}>Preview</button>
                    <button type='button' onClick={nextHandler}>Next</button>
                </div>
                <button type='button' onClick={todayHandler}>Today</button>
            </div>
            <div>
                <Link href={'/calendar/month'}>Month</Link>
                <Link href={`/calendar/day/${today.format('YYYY-MM-DD')}`}>Day</Link>
            </div>
        </div>
    )
}