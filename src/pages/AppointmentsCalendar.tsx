import React from 'react';
import { CalendarHeader } from '@/components/calendar/CalendarHeader';
import { CalendarGrid } from '@/components/calendar/CalendarGrid';


export function AppointmentsCalendar() {
  return (
    <div className="h-full flex flex-col p-6 bg-gray-50">
      <CalendarHeader />
      <CalendarGrid />
    </div>
  );
}