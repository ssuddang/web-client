'use client';

import { useState } from 'react';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  getDay,
  isToday,
} from 'date-fns';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  return (
    <div className="p-4 w-[900px] mx-auto bg-white mt-[30px] mb-[50px]">
      <div className="flex justify-between items-center mb-10 mx-[300px]">
        <button onClick={prevMonth} className="px-2 py-1">
          ◀
        </button>
        <h2 className="text-lg font-bold">
          {format(currentDate, 'yyyy년 MM월')}
        </h2>
        <button onClick={nextMonth} className="px-2 py-1">
          ▶
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center font-bold mb-[30px]">
        {['일', '월', '화', '수', '목', '금', '토'].map((day, index) => (
          <div
            key={day}
            className={`${
              index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : ''
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const dayOfWeek = getDay(day);
          const isSunday = dayOfWeek === 0;
          const isSaturday = dayOfWeek === 6;
          const inCurrentMonth = isSameMonth(day, monthStart);
          const isCurrentDay = isToday(day);

          return (
            <button
              key={index}
              onClick={() => setSelectedDate(day)}
              className={`relative flex flex-col items-center justify-start p-2 h-[100px] w-full rounded 
                ${inCurrentMonth ? 'text-black' : 'text-gray-400'}
                ${isSameDay(day, selectedDate!) ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}
                ${
                  inCurrentMonth && isSunday
                    ? 'text-red-500'
                    : inCurrentMonth && isSaturday
                      ? 'text-blue-500'
                      : ''
                }
                ${isCurrentDay ? 'bg-gray-100' : ''}`}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
