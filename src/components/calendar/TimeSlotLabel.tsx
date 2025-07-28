// frontend/src/components/calendar/TimeSlotLabel.tsx
import React from 'react';

export function TimeSlotLabel({ time }: { time: string }) {
  return (
    <div className="flex items-center justify-end pr-2 h-full">
      <span className="text-sm font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">
        {time}
      </span>
    </div>
  );
}