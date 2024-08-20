'use client'
import Calendar, { CalendarDayHeader }  from '../../../components/shared/Calendar'
import "./styles.css"
import { CalendarDayObject, CalendarProps  } from '@/types'

import { useState } from "react";



export default function App() {
    const [yearAndMonth, setYearAndMonth] = useState<[number, number]>([2021, 9]);
  
    return (
      <div className="App">
        <Calendar
          yearAndMonth={yearAndMonth}
          onYearAndMonthChange={setYearAndMonth}
          renderDay={(calendarDayObject: CalendarDayObject) => (
            <div>
              <CalendarDayHeader calendarDayObject={calendarDayObject} />
            </div>
          )}
        />
      </div>
    );
  }